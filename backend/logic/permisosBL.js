const permisosDA = require('../dataAccess/permisosDA');
const Aplicativo = require('../entitities/Aplicativo');
const Permiso = require('../entitities/Permiso');
const Rol = require('../entitities/Rol');
const Usuario = require('../entitities/Usuario');

module.exports = {
    obtenerTodosLosPermisos : async () => {
        permisosBD = await permisosDA.getAll();
        respuesta = [];
        permisosBD.forEach(fila => {
            usuario = new Usuario(fila.user_id,fila.nombres,fila.apellidos,fila.direccion,fila.ciudad,fila.departamento);
            rol = new Rol(fila.rol_neg_id,fila.descripcion_rol_neg);
            app = new Aplicativo(fila.app_id,fila.nombreapp);
            permiso = new Permiso(usuario,app,rol,fila.fecha_autorizacion,fila.fecha_solicitud,fila.estado);
            respuesta.push(permiso);
        });
        return respuesta;
    }
}