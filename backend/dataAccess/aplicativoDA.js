const db = require('../db/conn');
const pool = db.pool;

async function getAllApps(){
    let queryResult;

    try{
        const query = `
            SELECT * FROM APLICATIVOS; `;
        queryResult = await pool.query(query);
    }catch (err){
        console.error(err.message);
        throw err;
    }
    return queryResult[0];
}

module.exports = {
    getAllApps
}