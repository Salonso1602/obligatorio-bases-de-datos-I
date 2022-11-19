var express = require('express');
var router = express.Router();
const registrosDA = require('../dataAccess/registrarDA');
const bcrypt = require("bcrypt");
const { json } = require('express');

router.get('/', async function(req, res, next) {
    const preguntas = await registrosDA.getAllQuestions();
    if(!preguntas){
        res.status(404).json('no questions');
    }
    res.status(200).json(preguntas);
});

router.post('/', async function(req,res,next){
    const registrarUsuario = await registrosDA.insertUser(
        req.body.user_id,
        req.body.nombres,
        req.body.apellidos,
        req.body.direccion,
        req.body.ciudad,
        req.body.departamento,
        req.body.password
    );
    const registrarPreguntaUsuario = await registrosDA.insertUserQuestion(
        req.body.user_id,
        req.body.preg_id,
        req.body.respuesta
    );
    if(registrarUsuario && registrarPreguntaUsuario){
        res.status(200).json('funcionó');
    }
    res.status(400),json('no funcionó');
});

module.exports = router;