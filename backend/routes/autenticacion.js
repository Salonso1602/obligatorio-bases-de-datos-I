var express = require('express');
var router = express.Router();
const autenticacionDA = require('../dataAccess/autenticacionDA');

router.post('/', async function(req, res, next) {
    const user_id = req.body.user_id;
    const password = req.body.password;

    const esUsuario = await autenticacionDA.esUsuarioValido(user_id, password);

    if(esUsuario === false){
        res.status(401).send({"result": false});
    }
    else{
        res.status(200).send({"result": true});
    }

});

router.get('/menu', async function (req,res,next){
    const user_id = req.header("authorization");
    const app_id = req.query.app_id;
    const rol_neg_id = req.query.rol_neg_id;

    if(!user_id || !app_id || !rol_neg_id){
        res.status(401).send({"result": false});
        return;
    }

    const puedeEntrar = await autenticacionDA.usuarioPermitido(user_id,app_id,rol_neg_id);

    if(puedeEntrar == false){
        res.status(401).send({"result": false})
    }
    else{
        res.status(200).send({"result": true});
    }
})

module.exports = router;