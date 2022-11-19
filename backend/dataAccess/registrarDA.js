const db = require('../db/conn');
const pool = db.pool;
const bcrypt = require("bcrypt");

async function getAllQuestions(){
    let queryResult;
    try{
        const query = `SELECT * FROM PREGUNTAS`
        queryResult = await pool.query(query);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    return queryResult[0];
}

async function insertUser(user_id,nombres,apellidos,direccion,ciudad,departamento,password){
    let queryResult;
    let hashpwd = await bcrypt.hash(password, 10)
    try{
        const query = {
            sql: `INSERT INTO PERSONAS (user_id,nombres,apellidos,direccion,ciudad,departamento,hashpwd)
                VALUES (?,?,?,?,?,?,?)`,
            values: [user_id,nombres,apellidos,direccion,ciudad,departamento,hashpwd]
        }
        queryResult = await pool.query(query);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    return queryResult;
}

async function insertUserQuestion(user_id,preg_id,respuesta){
    let queryResult;
    let hashrespuesta = await bcrypt.hash(respuesta, 10)
    try{
        const query = {
            sql: `INSERT INTO PERSONAS_PREGUNTAS (user_id,preg_id,respuesta)
            VALUES (?,?,?)`,
    values: [user_id,preg_id,hashrespuesta]
        } 
        queryResult = await pool.query(query);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    return queryResult;
}

module.exports = {
    getAllQuestions,
    insertUserQuestion,
    insertUser
}