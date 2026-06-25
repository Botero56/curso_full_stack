import server from './server'

const port = process.env.PORT || 4000
//process.env.PORT || => significa que si existe un env utilizara el puerto que este ahi 

server.listen(port, () => {
    console.log('servidor funcionando en el puerto:', port)
})

