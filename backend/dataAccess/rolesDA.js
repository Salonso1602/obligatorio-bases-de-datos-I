const db = require('../db/conn');
const pool = db.pool;

async function getByAppId(id){
    let queryResult;

    try{
        const query = {
            sql :`
            SELECT * FROM rolesNegocioConAplicativos WHERE app_id = ? `,
            values : [id]}
        queryResult = await pool.query(query);
    }catch (err){
        console.error(err.message);
        throw err;
    }
    return queryResult[0];
}

module.exports = {
    getByAppId
}