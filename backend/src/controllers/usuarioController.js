import {obtenerUsuarios as obtenerUsuariosServices} from '../services/usurioSevice.js'

export const obtenerUsuarios = async(req, res)=>{
    try{
        const usuarios = await obtenerUsuariosServices()
        
        res.status(200).json(usuarios)

    }catch(error){
        console.error(error)
    }
}