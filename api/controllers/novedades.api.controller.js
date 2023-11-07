import * as NovedadesServices from '../../services/novedades.services.js';

// req.params => parametros que vienen en la url 
// req.body => vienen en el body de la peticion
// req.query => vienen en el query 


function findAll(req, res) {
    const filter = {}

    if (req.query.genero){
        filter.genero = req.query.genero
    }

    NovedadesServices.traerNovedades(filter)
        .then(function (novedades) {
            res.status(200).json(novedades)
        })
}


function create (req, res){
    const novedad = {
        name: req.body.name,
        sinopsis: req.body.sinopsis,
        genero: req.body.genero,
        fechaDeEstreno: req.body.fechaDeEstreno,
        trailer: req.body.trailer,
    }
    NovedadesServices.guardarNovedades(novedad)
    .then(function (newNovedad) {
        res.status(201).json(newNovedad)
    })
}

function findOne(req, res) {
    const id = req.params.idNovedad

    NovedadesServices.traerNovedadByID(id)
    .then(function (novedad) {
        if (novedad) {
            res.status(200).json(novedad)
        } else {
            res.status(404).json("404", { message: "La novedad no se ha encontrado" })
        }
    })
}

function editById(req, res){
    const id = req.params.idNovedad

    const novedad = {}

    if (req.body.name){
        novedad.name = req.body.name
    }

    if (req.body.sinopsis){
        novedad.sinopsis = req.body.sinopsis
    }    
    
    if (req.body.genero){
        novedad.genero = req.body.genero
    }    
    
    if (req.body.fechaDeEstreno){
        novedad.fechaDeEstreno = req.body.fechaDeEstreno
    }

    if (req.body.trailer){
        novedad.trailer = req.body.trailer
    }

    NovedadesServices.editarNovedades(id, novedad)
    .then(function (novedad) {
        if (novedad) {
            res.status(200).json(novedad)
        } else {
            res.status(404).json("404", { message: "Novedad no encontrada" })
        }
    })


}

function deleteById(req, res) {
    const id = req.params.idNovedad

    NovedadesServices.eliminarNovedades(id)
    .then(function (novedad) {
        if (novedad) {
            res.status(200).json(novedad)
        } else {
            res.status(404).json("404", { message: "Novedad no encontrada" })
        }
    })
}


function replaceById(req, res){
    const id = req.params.idNovedad

    const novedad = {
        name: req.body.name,
        sinopsis: req.body.sinopsis,
        genero: req.body.genero,
        fechaDeEstreno: req.body.fechaDeEstreno,
        trailer: req.body.trailer,
    }

    NovedadesServices.replaceNovedad(id, novedad)
    .then(function (novedad) {
        if (novedad) {
            res.status(200).json(novedad)
        } else {
            res.status(404).json("404", { message: "Novedad no encontrada" })
        }
    })
}

export {
    findAll,
    create,
    findOne,
    editById,
    replaceById,
    deleteById
}