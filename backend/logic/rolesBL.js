const RolNeg = require('../entitities/RolNeg');
const rolesDA = require('../dataAccess/rolesDA');
module.exports = {
    getRolesByApp : async (app_id) => {
        let results = [];

        const resultDA = await rolesDA.getByAppId(app_id);
        resultDA.forEach(res => {
            results.push(new RolNeg(res.rol_neg_id, res.descripcion_rol_neg))
        })
        return results;
    }
}