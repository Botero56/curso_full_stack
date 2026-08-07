import { Router } from "express";
import { CreateAccount } from "./handlers";



const router = Router()

/**Autentification and register */

router.post('/auth/register', CreateAccount )

router.post('/register')



export default router

