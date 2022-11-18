const dummyDA = require('../dataAccess/dummyDA');

module.exports = {
    obtenerTodosLosPermisos : async (user_id) => {
        let dummyBD = await dummyDA.getAppsAndMenusForUser(user_id);
        
        return dummyBD;
    }
}