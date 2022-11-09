const db = require('../db/conn');
const pool = db.pool;

async function getAll() {
    try{
        const response = await pool.query(`SELECT * FROM Faculties`);
        console.log(response);
        return response[0];
    } 
    catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    getAll
}