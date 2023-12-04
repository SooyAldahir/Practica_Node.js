
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
  nombre:  String,
  descripcion: String
});

 //Crear el modelo
const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;