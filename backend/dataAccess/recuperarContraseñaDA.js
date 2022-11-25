const db = require('../db/conn');
const pool = db.pool;
const bcrypt = require("bcrypt");

const obtenerPreguntaUsuario = async (req, res) => {
    let queryResult;
    const user_id = req.params.user_id
    try{
        const query = {
            sql: 'SELECT pregunta FROM PREGUNTAS_USUARIOS WHERE user_id= ?;',
            values: [user_id]
        }
        queryResult = await pool.query(query);
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            err: err
        });
    }
    console.log(queryResult)

    if(queryResult[0].length === 0){
        return res.status(400).json({
            success: false,
            message: "no se encontro pregunta"
        });
    }

    return res.status(200).json({
        success: true,
        data: queryResult[0]
    })


}

const verificarRespuesta = async (req,res) => {
    let queryResult;
    const user_id = req.params.user_id;
    const respuesta = req.body.respuesta;
    try{
        const query = {
            sql: 'SELECT respuesta FROM PREGUNTAS_USUARIOS WHERE user_id= ?;',
            values: [user_id]
        }
        queryResult = await pool.query(query);
    } 
    catch (err) {
        console.error(err);
        return res.status(400).json({
            success: false,
            message: "no se encontro pregunta"
        });
    }

    if(queryResult[0].length === 0){
        return res.status(400).json({
            success: false,
            message: "el usuario no tiene preguntas asignadas"
        });
    }

    const result = await bcrypt.compareSync(respuesta, queryResult[0][0].respuesta , function(err, result) {
        return result;
    });
    console.log(result)
    if(result){
        return res.status(200).json({
            success: true,
            message: "respuesta correcta"
        });
    }
    else{
        return res.status(400).json({
            success: false,
            message: "respuesta incorrecta"
        });
    }
}

const cambiarContraseña = async (req,res) => {
    let queryResult;
    const user_id = req.body.user_id
    const newPassword = req.body.newPassword;
    const hashrespuesta = await bcrypt.hash(newPassword, 10)
    try{
        const query = {
            sql: 'UPDATE PERSONAS SET hashpwd = ? WHERE user_id = ?',
            values: [hashrespuesta,user_id]
        }
        queryResult = await pool.query(query);
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            err: err
        });
    }
    console.log(queryResult)

    if(queryResult[0].length === 0){
        return res.status(400).json({
            success: false,
            message: "no se encontro pregunta"
        });
    }
    else{
        return res.status(200).json({
            success: true,
            message: "se cambio la contraseña"
        });
    }
}

module.exports = {
    obtenerPreguntaUsuario,
    verificarRespuesta,
    cambiarContraseña
}