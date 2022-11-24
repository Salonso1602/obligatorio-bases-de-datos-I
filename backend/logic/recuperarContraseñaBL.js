const { obtenerPreguntaUsuario, verificarRespuesta } = require('../dataAccess/recuperarContraseñaDA');

const recuperarPregunta = async (user_id) => {
    return await obtenerPreguntaUsuario(user_id);
}

const preguntaCorrecta = async (user_id, respuesta) => {
    return await verificarRespuesta(user_id,respuesta);
}


module.exports ={
    recuperarPregunta,
    preguntaCorrecta
}