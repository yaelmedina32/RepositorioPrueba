//Este es la exportación de la BD de la carpeta BD
import { conectarBD } from '../BD/db.js';

export const getPrueba = async (req, res) =>{
    const pool = await conectarBD();
    const result = await pool.request().query("SELECT * FROM dbo.cuadrillas where cuadrillaid = 2");
    res.json(result.recordset);
    console.log(result.recordset);
}

/*
export const getCuadrillas = async (req,res)=>{
    const pool = await conectarBD();
    const result2 = await pool.request().query("SELECT * FROM dbo.cuadrillas");
    res.json(result2.recordset);
    console.log(result2.recordset);
}
*/
