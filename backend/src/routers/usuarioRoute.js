import express from 'express'
import {
    obtenerUsuarios as obtenerUsuariosController,
    validarUsuario as validarUsuarioController
} from '../controllers/usuarioController.js'


const router = express.Router()

router.get('/', obtenerUsuariosController)
router.post('/login', validarUsuarioController);



export default router