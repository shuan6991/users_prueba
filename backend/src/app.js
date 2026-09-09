import express from 'express'
import router from './routers/usuarioRoute.js'

const app = express()

app.use(express.json())


app.get('/', (req, res)=>{
    res.status(200).send('El servidor esta conectado correctamente')
})

app.use('/usuarios', router)


export default app