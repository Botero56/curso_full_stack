
import express from 'express'
import 'dotenv/config'
import router from './router'
import { connectdb } from './config/db'


const app = express();
app.use(express.json())
app.use('/', router)


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
connectdb()



//leer datos del formulario



export default app
