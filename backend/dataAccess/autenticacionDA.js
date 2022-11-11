const db = require('../db/conn');
const pool = db.pool;
const bcrypt = require("bcrypt");

async function esUsuarioValido(user_id,password) {
    let queryResult;
    const hashpwd = password;
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
        if (queryResult[0][0].hashpwd != hashpwd){
            //Las contraseñas no coinciden
            return false;
        }
        //todo ok
        return true;
    }
}

module.exports = {
    esUsuarioValido
}