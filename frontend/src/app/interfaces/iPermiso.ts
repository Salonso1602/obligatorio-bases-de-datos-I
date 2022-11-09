import { IUser } from "./iUser"
import { IApp } from "./iApp"
import { IRolNeg } from "./iRolNeg"

export interface IPermiso {
    user : IUser,
    app : IApp,
    rolNeg : IRolNeg,
    fechaSolicitud : Date,
    fechaAutorizacion: Date,
    estado : string
}

export const IPermisoFields : string[] = ['User', 'App', 'Rol de Negocio', 'Fecha de Solicitud', 'Fecha de Autorización', 'Estado de Solicitud'];