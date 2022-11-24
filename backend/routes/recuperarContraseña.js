let express = require('express');
var router = express.Router();
const { recuperarPregunta, preguntaCorrecta } = require('../logic/recuperarContraseñaBL');

router.get('/:user_id', async function(req, res) {
    const result = recuperarPregunta(req.params.user_id);

});

router.post('/user_id', async function(req, res) {
    
});
