const db = require('../db/conn');
const pool = db.pool;

const obtenerPreguntaUsuario = async (user_id) => {
    let queryResult;
    try{
        const query = {
            sql: 'SELECT pregunta FROM PREGUNTAS_USUARIOS WHERE user_id="?";',
            value: [user_id]
        }
        queryResult = await pool.query(query);
    } 
    catch (err) {
        console.error(err);
        throw err;
    }

    if(queryResult[0].length === 0){
        return false;
    }

}

const verificarRespuesta = async (user_id,respuesta) => {
    let queryResult;
    try{
        const query = {
            sql: 'SELECT pregunta FROM PREGUNTAS_USUARIOS WHERE user_id=? and respuesta=?;',
            value: [user_id,respuesta]
        }
        queryResult = await pool.query(query);
    } 
    catch (err) {
        console.error(err);
        return {
            err: err
        };
    }

    if(queryResult[0].length === 0){
        return false;
    }

}

module.exports = {
    obtenerPreguntaUsuario,
    verificarRespuesta
}