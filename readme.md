

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