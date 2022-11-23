const App = require('../entitities/Aplicativo');
const appsDa = require('../dataAccess/aplicativoDA');

module.exports = {
    obtenerTodas : async () => {
        let result = [];
        const resultDA = await appsDa.getAllApps();
        if(resultDA.length <= 0){
            return undefined;
        }
        else{
            resultDA.forEach(ap => {
                result.push(new App(ap.app_id, ap.nombreapp));
            });
            return result;
        }
    } 
}