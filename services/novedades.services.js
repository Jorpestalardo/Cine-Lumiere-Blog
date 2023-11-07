import { MongoClient, ObjectId } from "mongodb";


const client =  new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db('proyectoTercerParcial')
const novedades = db.collection('Novedades')


async function traerNovedades(filter){

    const filterQuery = {
        ...filter
    }

    if(filterQuery.name) {
        filterQuery.name = {$regex: filterQuery.name, $options: 'i'}
    }

    return client.connect()
    .then(async function(){
        return novedades.find(filter).toArray()
    })
}


async function traerNovedadByID(id) {
    return client.connect()
    .then(function(){
        return novedades.findOne({_id: new ObjectId(id)})
    })

}

async function replaceNovedad(id, novedades){
    return client.connect()
    .then(function (){

        return novedades.replaceOne({_id: new ObjectId(id)} , {$set: novedades})
        
    })
}

async function guardarNovedades(novedad) {

    const nuevaNovedad = {
        ...novedad
    }

    return client.connect()

    .then(function (){

        return novedades.insertOne(nuevaNovedad)
        
    })
    .then(function (result){
        return nuevaNovedad
    })
}

async function eliminarNovedades(id){
    return client.connect()
    .then(function(){
        return novedades.deleteOne({_id: new ObjectId(id)})
    })
    .then(function (result){
        return true
    })
}

async function editarNovedades(id, novedad){
    return client.connect()
    .then(function(){
        return novedades.updateOne({_id: new ObjectId(id)} , {$set: novedad})
    })

}


export {
    traerNovedades,
    traerNovedadByID,
    guardarNovedades,
    eliminarNovedades,
    editarNovedades,
    replaceNovedad
}