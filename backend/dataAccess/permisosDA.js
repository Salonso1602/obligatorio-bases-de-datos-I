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

async function createRequest(request) {
    let queryResult;
    try {
        const query =
        {
        sql: `
            INSERT INTO PERMISOS
            VALUES (?,?,?,?,?,?)`,
        values: [request.user, request.app, request.rolNeg, request.fechaSolicitud, null, request.estado]
        }
        queryResult = await pool.query(query);
    }
    catch (err) {
        console.error('ON D.A.\n'+err)
        throw err;
    }

    return (queryResult);
}

module.exports = {
    getAll,
    setState,
    createRequest
}