const permisosDA = require('../dataAccess/permisosDA');

module.exports = {
    obtenerTodosLosPermisos : async () => {
        return await permisosDA.getAll();
    }
}