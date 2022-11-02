import { Router } from 'express';
import { conex } from '../BD/db.js';

let router = Router();


router.get('/hola2', async(req, res)=>{
    const [result] = await conex.query("SELECT * FROM productos WHERE id>1");
    res.json(result);
});
export default router;
