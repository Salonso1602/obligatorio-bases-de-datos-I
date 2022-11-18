const db = require('../db/conn');
const pool = db.pool;

async function getAppsAndMenusForUser(user_id) {
    let queryResult;
    try{
        const query = {
            sql : ` SELECT * FROM menusDisponiblesParaPersona WHERE user_id = ? ; `,
            values : [user_id]}
        queryResult = await pool.query(query);
    } 
    catch (err) {
        console.error(err);
        throw err;
    }

    // No existe usuario con ese ID
    if(queryResult === null || queryResult === undefined){
        return undefined;
    }
    else{
        return queryResult;
    }

}

module.exports = {
    getAppsAndMenusForUser
}