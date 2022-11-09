var express = require('express');
const permisosBL = require('../logic/permisosBL');
var router = express.Router();

router.get('/', async function(req, res, next) {
    const permisos = await permisosBL.obtenerTodosLosPermisos();
    res.status(200).send(permisos);
});

module.exports = router;