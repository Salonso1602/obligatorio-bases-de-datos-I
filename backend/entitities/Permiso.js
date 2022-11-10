module.exports = class Permiso {
    constructor(user,app,rolNeg,fechaSolicitud,fechaAutorizacion,estado){
        this.user = user;
        this.app = app;
        this.rolNeg = rolNeg;
        this.fechaSolicitud = fechaSolicitud;
        this.fechaAutorizacion = fechaAutorizacion;
        this.estado = estado;
    }
}
