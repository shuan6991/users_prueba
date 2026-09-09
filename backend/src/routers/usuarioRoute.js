import express from 'express'
import {obtenerUsuarios as obtenerUsuariosController} from '../controllers/usuarioController.js'


const router = express.Router()

router.get('/', obtenerUsuariosController)



export default router