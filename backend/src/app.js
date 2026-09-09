import express from 'express'
import router from './routers/usuarioRoute.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())


app.get('/', (req, res)=>{
    res.status(200).send('El servidor esta conectado correctamente')
})

app.use('/usuarios', router)


export default app