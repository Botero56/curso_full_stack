
import { Request, Response } from "express"
import slug from 'slug'
import User from "../models/User"
import { hashpassword } from "../utils/auth"


export const CreateAccount = async (req : Request, res:Response) => {

    const {email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        const error = new Error('Un usuario con ese email ya esta registrado  ')
        return res.status(409).json({error : error.message})
    }

    const handle = slug(req.body.handle, '')

    const handleExists = await User.findOne({handle})

    if(handleExists){
        const error = new Error('Nombre de usuario no disponible  ')
        return res.status(409).json({error : error.message})
    }
    
    const user = new User(req.body)
    user.password = await hashpassword(password)
    user.handle = handle


    await user.save()

    res.status(201).send('Registro enviado correctamente ')
   /* await User.create(req.body)*/
}