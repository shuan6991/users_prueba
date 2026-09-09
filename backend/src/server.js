import app from './app.js'

const puerto = 3000

app.listen(3000, ()=>{
    console.log(`El servidor esta escuchando por el puerto ${puerto}`)
})