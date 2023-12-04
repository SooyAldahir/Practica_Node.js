const express = require("express");
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// puerto de coneccion
const port = 3000;

// conexion a la base de datos 
const mongoose = require('mongoose');
const user = 'aldahirfxck';
const password = 'y7ShFvlQSeiOJAln';
const uri = `mongodb+srv://${user}:${password}@cluster0.im8guww.mongodb.net/retryWrites=true&w=majority`;
mongoose.connect(uri,)
    .then(()=>console.log('Base de datos conectada'))
    .catch(e => console.log(e))

// Motor de plantilla
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// se llama las rutas
app.use('/', require('./router/Rutaspage'));
app.use('/categorias', require('./router/Categorias'));


app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "iluminaria"

  })
})






app.listen(port, () => {
  console.log(`Conectados al servidor${port}`);
});