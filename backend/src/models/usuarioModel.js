import pool from "../config/database.js"

export const obtenerUsuarios = async()=>{
    const [rows] = await pool.query('SELECT * FROM users')

    return rows
}


export const validarUsuario = async(user, password)=>{

    const [rows] = await pool.query(`SELECT user, password FROM users WHERE user = '${user}' AND password = '${password}'`)

    return rows
}