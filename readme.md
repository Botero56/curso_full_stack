

configuracion para que express funcione con typescript
{
    "compilerOptions": {
        "outDir": "./dist", donde se va a ejecutar el codigo 
        "rootDir": "/src", carpeta principal
        "lib": ["ESNext"], indica las listas de bibliotecas que se quieran usar ( ESnet busca las mas actuales)
        "target": "ESNext", la version a al cual se va a compilar el codigo
        "moduleResolution": "NodeNext", se cambia la forma de escribir el codigo
        "module": "NodeNext", es la forma de como se van a ejecutar los modulos
        "strict": false, para que typescript no este en un modo mas estricto
        "sourceMap": true, para debuguear la aplicacion - pasar de typescript a js
        "esModuleInterop": true, para usar mas modulos
        "declaration": true, habilita la creacion de los archivos ts y src

    },
    "include": ["src/**/*.ts"]
}

¿que son los orm?

es una tecnica que se utiliza donde los datos de una base de datos son tratados como objetos.

los orms se usan para escribir codigo que interactue con una base de datos.

la velocidad de desarrollo que tienen ya que tienen una gran cantidad de metodos para crear, listar, actualizar, y eliminar datos.

por ultimo, la suguridad.

ejemplos 

insert into 'users' ('name') values('juan') <- sql

users.create({name: 'juan'}) <- codigo orm

los orms mas comunes en node.js

-sequelize
-mongoose
-prisma
-typeorm


mongoose

permite definir modelos con la forma que tendra los datos almacenados


devtree
Devtree2026!

mongodb+srv://boterosamuel3_db_user:cuHuh62NvvH2BnGV@cluster0.x8041d2.mongodb.net/?appName=Cluster0