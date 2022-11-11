const db = require('../db/conn');
const pool = db.pool;
const bcrypt = require("bcrypt");

async function esUsuarioValido(user_id,password) {
    let queryResult;
    try{
        //const hashpwd = bcrypt.hashSync(password, 10);
        //console.log(hashpwd);
        const hashpwd = password;
        const query = `
        SELECT
            CASE 
                WHEN 
                    EXISTS(
                        SELECT PERSONAS.user_id FROM PERSONAS 
                        WHERE PERSONAS.user_id= "${user_id}" and PERSONAS.hashpwd = "${hashpwd}")
                    THEN 'TRUE'
                    ELSE 'FALSE'
            END;
        `;
        
        queryResult = await pool.query(query);

    } 
    catch (err) {
        console.error(err);
        throw err;
    }

    esValido = Object.values(queryResult[0][0])[0];
    return esValido;
}

module.exports = {
    esUsuarioValido
}