import {
    obtenerUsuarios as obtenerUsuariosServices,
    validarUsuario as validarUsuarioServices

} from '../services/usurioSevice.js'

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await obtenerUsuariosServices()

        res.status(200).json(usuarios)

    } catch (error) {
        console.error(error)
    }
}


export const validarUsuario = async (req, res) => {

    try {

        const { user, password } = req.body;

        const resultado = await validarUsuarioServices(user, password)

        if (resultado){
            res.status(200).json(resultado)
        }else{
            res.status(401).send('Credenciales invalidas')
        }

    } catch (error) {
        res.status(500).send(error)
       
    }

}