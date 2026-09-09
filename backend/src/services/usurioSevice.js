import {
    obtenerUsuarios as obtenerUsuariosModels,
    validarUsuario as validarUsuarioModels
} from '../models/usuarioModel.js'

export const obtenerUsuarios = async () => {
    const usuarios = await obtenerUsuariosModels()

    return usuarios
}


export const validarUsuario = async (user, password) => {


    try {

        const resultado = await validarUsuarioModels(user, password)

        if (resultado.length === 0)
            throw new Error('Usuario no encontrado en la base de datos')

        return resultado[0]


    } catch (error) {
        console.error(error)
    }


}