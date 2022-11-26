let express = require('express');
var router = express.Router();
const { obtenerPreguntaUsuario, verificarRespuesta, cambiarContraseña } = require('../dataAccess/recuperarContraseñaDA');

router.get('/:user_id', async (req, res) => {
    return obtenerPreguntaUsuario(req, res);
});

router.post('/:user_id', async (req, res) => {
    return verificarRespuesta(req, res);
});

router.post('/',async (req,res) => {
    return cambiarContraseña(req,res);
}) 

module.exports = router
