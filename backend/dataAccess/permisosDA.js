const db = require('../db/conn');
const pool = db.pool;

async function getAll() {
    let queryResult;
    try {
        const query = `
        SELECT * FROM permisosSolicitados`;
        queryResult = await pool.query(query);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    return queryResult[0];
}

async function setState(user_id, app_id, rol_neg_id, newState) {
    let queryResult;
    try {
        const query =
        {
        sql: `
            UPDATE PERMISOS
            SET estado = ?
            WHERE 
                user_id = ? AND
                app_id = ? AND
                rol_neg_id = ?`,
        values: [newState, user_id, app_id, rol_neg_id]
        }
        queryResult = await pool.query(query);
    }
    catch (err) {
        throw err;
    }

    return (queryResult);
}

module.exports = {
    getAll,
    setState
}