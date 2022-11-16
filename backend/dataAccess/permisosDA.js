const db = require('../db/conn');
const pool = db.pool;

async function getAll() {
    let queryResult;
    try{
        const query = `
        SELECT 
        PERMISOS.*,
        PERSONAS.nombres,PERSONAS.apellidos,PERSONAS.direccion, PERSONAS.ciudad, PERSONAS.departamento,
        APLICATIVOS.nombreapp,
        ROLES_NEGOCIO.descripcion_rol_neg
        FROM PERMISOS
        JOIN PERSONAS ON PERMISOS.user_id = PERSONAS.user_id
        JOIN APLICATIVOS ON PERMISOS.app_id = APLICATIVOS.app_id 
        JOIN ROLES_NEGOCIO ON PERMISOS.rol_neg_id = ROLES_NEGOCIO.rol_neg_id;
        `;

        queryResult = await pool.query(query);
        
    } 
    catch (err) {
        console.error(err);
        throw err;
    }
    return queryResult[0];
}

async function setState(user_id, app_id, rol_neg_id, newState){
    let queryResult;
    try {
        const query = `
        UPDATE PERMISOS
        SET estado = '${newState}'
        WHERE 
            user_id = ${user_id} AND
            app_id = ${app_id} AND
            rol_neg_id = ${rol_neg_id}
            
        `;
        queryResult = await pool.query(query);
    }
    catch (err){
        throw err; }

    return(queryResult);
}

module.exports = {
    getAll,
    setState
}