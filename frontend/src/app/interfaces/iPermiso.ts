import { IUser } from "./iUser"
import { IApp } from "./iApp"
import { IRolNeg } from "./iRolNeg"
import { estadosPermiso } from "../enums/estadosPermisos";

export interface IPermiso {
    user : IUser,
    app : IApp,
    rolNeg : IRolNeg,
    fechaSolicitud : Date,
    fechaAutorizacion: Date,
    estado : estadosPermiso
}

export const IPermisoFields : string[] = ['User', 'App', 'Rol de Negocio', 'Fecha de Solicitud', 'Fecha de Autorización', 'Estado de Solicitud'];