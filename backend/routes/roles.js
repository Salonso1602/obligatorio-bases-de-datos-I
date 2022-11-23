var express = require('express');
const Permiso = require('../entitities/Permiso');
var router = express.Router();
const appsBL = require('../logic/appsBL');
const rolesBL = require('../logic/rolesBL');
const permisosBL = require('../logic/permisosBL')

router.get('/appsDisponibles', async function (req, res, next) {
    let apps;
    try {
        apps = await appsBL.obtenerTodas();
    } catch (err) {
        res.sendStatus(500);
        return;
    }
    if (!apps) {
        res.status(404).send("not found");
        return;
    }
    res.status(200).send(apps);
});

router.get('/:app_id', async function (req, res, next) {
    let resp;
    try {
        resp = await rolesBL.getRolesByApp(req.params.app_id);
    } catch (err) {
        res.sendStatus(500);
        return;
    }
    if (!resp) {
        res.status(404).send("not found");
        return;
    }
    res.status(200).send(resp);
});

router.post('/request', async function (req, res, next) {
    const request = new Permiso(req.headers.authorization, req.body.app_id, req.body.rol_neg_id, new Date(req.body.fechaSolicitud), null, 'PENDIENTE');
    let resp;

    try {
        resp = await permisosBL.crearSolicitud(request);
    } catch (err) {
        res.sendStatus(500);
        return;
    }
    if (!resp) {
        res.status(404).send("not found");
        return;
    }
    res.status(200).send();
})

module.exports = router;