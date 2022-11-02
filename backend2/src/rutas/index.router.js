import { Router } from 'express';
import { conex } from '../BD/db.js';
const router = Router();
router.get('/ping', async (req, res)=>{
  //El result se pone entre [ ] para indicarle que sólo lo que hay dentro de los registros
  //para que no regrese hasta el buffer
    const result = await conex.executeQuery('SELECT * FROM dbo.prueba WHERE id = 7370');
    res.json(result);
});
export default router;

router.get('/', async(req, res)=>{
    const [result] = await conex.query('SELECT * FROM productos WHERE id = 3');
})
