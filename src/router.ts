import { Router } from "express";
import User from "./models/User";


const router = Router()

/**Autentification and register 

router.post('/auth/register', async (req, res) => {
    await User.create(req.body)
} )
*/
router.post('/',(req, res)  => {
    res.send('hola')
})


export default router

