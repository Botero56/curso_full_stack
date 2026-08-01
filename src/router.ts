import { Router } from "express";
import User from "./models/User";



const router = Router()

/**Autentification and register */

router.post('/auth/register', async (req, res) => {

    const user = new User(req.body)

    await user.save()

    res.send('Registro enviado correctamente ')
   /* await User.create(req.body)*/
} )



export default router

