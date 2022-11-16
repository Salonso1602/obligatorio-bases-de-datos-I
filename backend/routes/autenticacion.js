var express = require('express');
var router = express.Router();
const autenticacionDA = require('../dataAccess/autenticacionDA');

router.post('/', async function(req, res, next) {
    const user_id = req.body.user_id;
    const password = req.body.password;

    const esUsuario = await autenticacionDA.esUsuarioValido(user_id, password);

    console.log("esusuario", esUsuario);
    if(esUsuario === false){
        res.status(401).send({"result": false});
    }
    else{
        res.status(200).send({"result": true});
    }

});

module.exports = router;