module.exports = class Usuario {
        constructor(user_id, nombres, apellidos, direccion, ciudad, departamento){
            this.user_id = user_id;
            this.nombres = nombres;
            this.apellidos = apellidos;
            this.direccion = direccion;
            this.ciudad = ciudad;
            this.departamento = departamento;
        }
    }
