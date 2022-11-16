var express = require('express');
const Permiso = require('../entitities/Permiso');
const permisosBL = require('../logic/permisosBL');
var router = express.Router();

router.get('/', async function(req, res, next) {
    const permisos = await permisosBL.obtenerTodosLosPermisos();
    if (!permisos){
        res.status(404).send("not found");
        return;
    }
    res.status(200).send(permisos);
});

router.post('/', async function(req, res, next) {
    const permBody = req.body.permiso;
    const permiso = new Permiso(permBody.user, permBody.app, permBody.rolNeg, permBody.fechaSolicitud, permBody.fechaAutorizacion, permBody.estado);
    const newEstado = req.body.estadoNuevo;

    const resp = await permisosBL.modificarEstadoPermiso(permiso, newEstado);
    if (!resp){
        res.status(404).send("not found");
        return;
    }
    res.status(200).send();
});

module.exports = router;