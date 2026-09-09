import pool from "../config/database.js"

export const obtenerUsuarios = async()=>{
    const [rows] = await pool.query('SELECT * FROM users')

    return rows
}