//Este se usa para crear una conexion directamente, te ahorra el connnect()
//el promise se usa para complementar directamente con las funcionas asincronas y el await
import { createPool } from 'mysql2/promise';
export const conex = createPool({
    host:'localhost',
    user: 'root',
    password: 'admin123',
    database: ''
});

import sql from 'mssql';

const dbSettings = {
    user:'root',
    password:'root',
    server:'DESKTOP-S3LAN7E',
    database:'spvNET',
    trustServerCertificate: true
}

export async function conectarBD(){
    const pool = await sql.connect(dbSettings);
    return pool;
}
conectarBD();
