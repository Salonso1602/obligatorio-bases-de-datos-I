const dummyDA = require('../dataAccess/dummyDA');

module.exports = {
    obtenerTodosLosPermisos : async (user_id) => {
        // resItem = {user_id: '', nombreapp: '', descripcion_menu: []};
        let result = [];
        let foundApps = [];


        let dummyRES = await dummyDA.getAppsAndMenusForUser(user_id);
        dummyRES.forEach(element => {
            if(foundApps.includes(element.nombreapp)){
                let val = result.find(x => x.nombreapp === element.nombreapp);
                val.descripcion_menu.push(element.descripcion_menu);
            } else{
                result.push({user_id : element.user_id,
                    nombreapp : element.nombreapp,
                    descripcion_menu : [element.descripcion_menu]});
                foundApps.push(element.nombreapp);
            }
        });
        return result;
    }
}