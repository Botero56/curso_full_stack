//const express = require('express')
import express from 'express'

const app = express()

//routing 

app.get('/', (req, res) => {
    res.send('hola mundo en express')
})

app.get('/pagina 2', (req, res) => {
    res.send('hola mundo en express')
})

const port = process.env.PORT || 4000
//process.env.PORT || => significa que si existe un env utilizara el puerto que este ahi 

app.listen(port, () => {
    console.log('servidor funcionando en el puerto:', port)
})

