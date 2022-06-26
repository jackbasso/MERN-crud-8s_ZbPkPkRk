# MERN-crud-8s_ZbPkPkRk

npm run start

Server
npm init (crea el package.json)
npm install express (installa express)
node server.js (inicia mi servidor)

Levantar node server:
raiz del proyecto
Reinicio el server con:
npx nodemon server.js (npx es por si instalo localmente; ver documentación)
(npm install nodemon - reinicia el server cuando cambia un archivo)



Levantar frontend server:
cd cliente (voy a la carpeta de mi front)
npm start


MongoDB 43:37
https://www.mongodb.com/es (Products-Community Server y descargo el msi)
con el msi me aseguro de instalar el MongoDB Compass (visual de la db)
https://mongoosejs.com/ (npm install mongoose)


Instalo uniqid en el front server que me genera ids
  npm install uniqid 1:20:00
Instalo axios para manejar mis peticiones
  npm install axios 

IMPORTANTE: Para que el frontend sepa donde está la ruta del backend debo indicarlo en el package.json del front (OJO - del front)
 "proxy": "http://localhost:5000/"

 En el servidor del backend debo instalar body-parser que es un middleware para poder utilizar el req en la ruta de usuario.js para poder definir el req (Parse incoming request bodies in a middleware before your handlers)
  npm install body-parser
Luego importamos el body-parser y lo configuro en server.js
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

Instalé Libreria para animar componentes como el listadoUsuarios https://michalsnik.github.io/aos/
  npm install aos

Instalé SweetAlert 2 para mostrar alerts más estilizadas
  npm install sweetalert2