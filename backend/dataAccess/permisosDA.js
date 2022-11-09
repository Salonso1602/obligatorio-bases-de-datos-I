const db = require('../db/conn');
const pool = db.pool;

async function getAll() {
    try{
        const queryResult = await pool.query(`SELECT * FROM PERMISOS`);
        console.log(queryResult);
        return queryResult[0];
    } 
    catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    getAll
}