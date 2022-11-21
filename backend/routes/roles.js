var express = require('express');
const Permiso = require('../entitities/Permiso');
var router = express.Router();

router.get('/appsDisponibles', async function(req, res, next) {
    const apps = await appsBL.obtenerTodas();
    if (!apps){
        res.status(404).send("not found");
        return;
    }
    res.status(200).send(apps);
});

router.get('/:app_id', async function(req, res, next) {
    const resp = await rolesBL.getRolesByApp(req.params.app_id);
    if (!resp){
        res.status(404).send("not found");
        return;
    }
    res.status(200).send(resp);
});

router.post('/request', async function(req, res, next){
    const request = new Permiso(req.body.user_id, req.body.app_id, req.body.rol_neg_id, req.body.fechaSolicitud, 'PENDING', 'PENDIENTE');

    let resp = await permisosBL.createRequest(request);

    if(!resp){
        res.status(404).send("not found");
        return;
    }
    res.status(200).send();
})

module.exports = router;