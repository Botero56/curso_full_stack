
import express from 'express'
import 'dotenv/config'
import router from './router'
import { connectdb } from './config/db'

const app = express()

connectdb()

//leer datos del formulario

app.use(express.json())

app.use('/', router)



export default app
