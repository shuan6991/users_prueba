import {obtenerUsuarios as obtenerUsuariosModels} from '../models/usuarioModel.js'

export const obtenerUsuarios = async()=>{
    const usuarios = await obtenerUsuariosModels()

    return usuarios
}