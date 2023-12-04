// Mascotas.js
const express = require('express');
const router = express.Router();

const Categoria= require('../models/categoria')

router.get('/',async (req, res) => {

    try {
        const ArrayCategoriasDB = await Categoria.find()
        console.log(ArrayCategoriasDB)

        res.render("categorias", {
            ArrayCategorias: ArrayCategoriasDB
           
        })

    } catch (error) {
        console.log(error)
    }
 
})

// crear ruta 

router.get('/crear', (req, res) => {
    res.render('crear')
})

//crear categorias
router.post('/', async (req,res)=>{
    const body = req.body

    
   
   try {

    const categoriaDB = new Categoria(body)
        await categoriaDB.save()
        res.redirect('/categorias')
        // console.log(categoriaDB)
    
   } catch (error) {
    console.log(error)
   }
})

// leer un unico documento
router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const categoriaDB = await Categoria.findOne({ _id: id })
        console.log(categoriaDB)
        res.render('detalle', {
            categoria: categoriaDB,
            error: false
        })
    } catch (error) {
        console.log('error', error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el documento...'
        })
    }
})

// eliminar
router.delete('/:id', async(req,res)=>{
    const id = req.params.id

    try{
        const categoriaDB = await Categoria.findByIdAndDelete({_id:id});
        
        if(!categoriaDB){
                res.json({
                    estado: true,
                    mensaje: 'Eliminado'
                })
        }
        else{
            res.json({
                estado: false,
                mensaje: 'Fallo al eliminar'
            })
        }
    } catch (error) {
        console.log(error)
    }

}) 
// editar
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    
   

    //console.log(id)
    //console.log('body', body)

    try {
        const categoriaDB = await Categoria.findByIdAndUpdate(
            id, body, { useFindAndModify: false })

        console.log(categoriaDB)

        res.json({
            estado: true,
            mensaje: 'Se ha actualizado el producto'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Fallo al editar el producto'
        })
    }
})

//imagenes

    




module.exports = router;