import { Router } from "express";


const router = Router()

/**Autentification and register */

router.post('/auth/register', (req, res) => {
    console.log(req.body) 
    
} )


router.get('/sisarras', (req, res) => {
    console.log("sisas") 
    
} )


export default router

