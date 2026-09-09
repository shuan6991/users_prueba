import {createPool} from 'mysql2/promise'


const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users_prueba'
    
})


export default pool