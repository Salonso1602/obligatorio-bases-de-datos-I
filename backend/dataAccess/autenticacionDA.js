const db = require('../db/conn');
const pool = db.pool;
const bcrypt = require("bcrypt");

async function esUsuarioValido(user_id,password) {
    let queryResult;
    try{
        const query = `
        SELECT PERSONAS.hashpwd FROM PERSONAS WHERE PERSONAS.user_id = "${user_id}";
        `
        queryResult = await pool.query(query);
    } 
    catch (err) {
        console.error(err);
        throw err;
    }

    // No existe usuario con ese ID
    if(queryResult[0].length === 0){
        console.log(queryResult)
        return false;
    }
    else{
        bcrypt.compare(password, queryResult[0][0].hashpwd , function(err, result) {
            console.log(typeof result);
            console.log(result);
            return result;
        });
    }
}

module.exports = {
    esUsuarioValido
}