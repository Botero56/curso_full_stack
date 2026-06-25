import { Router } from "express";


const router = Router()


router.get('/', (req, res) => {
    res.send('hola mundo en express doinf')
})

router.get('/nosotros', (req, res) => {
    res.send('hola mundoinf')
})

router.get('/blog', (req, res) => {
    res.send('blog')
})

export default router
