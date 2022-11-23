const permisosDA = require('../dataAccess/permisosDA');
const Aplicativo = require('../entitities/Aplicativo');
const Permiso = require('../entitities/Permiso');
const RolNeg = require('../entitities/RolNeg');
const Usuario = require('../entitities/Usuario');

module.exports = {
    obtenerTodosLosPermisos : async () => {
        permisosBD = await permisosDA.getAll();
        respuesta = [];
        permisosBD.forEach(fila => {
            usuario = new Usuario(fila.user_id,fila.nombres,fila.apellidos,fila.direccion,fila.ciudad,fila.departamento);
            rol = new RolNeg(fila.rol_neg_id,fila.descripcion_rol_neg);
            app = new Aplicativo(fila.app_id,fila.nombreapp);
            permiso = new Permiso(usuario,app,rol,fila.fecha_solicitud,fila.fecha_autorizacion,fila.estado);
            respuesta.push(permiso);
        });
        return respuesta;
    },
    modificarEstadoPermiso : async (permiso, estadoNuevo) => {
        const respuesta = await permisosDA.setState(permiso.user.user_id, permiso.app.app_id, permiso.rolNeg.rol_neg_id, estadoNuevo);
        return respuesta
    },
    crearSolicitud : async (permiso) => {
        const respuesta = await permisosDA.createRequest(permiso);
        return respuesta;
    }
}