import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('proyectoTercerParcial')
const films = db.collection('Films')

async function traerFilms(filter) {

    const filterQuery = {
        ...filter
    }

    if(filterQuery.name) {
        filterQuery.name = {$regex: filterQuery.name, $options: 'i'}
    }

    return client.connect()
        .then(async function () {
            return films.find(filter).toArray()
        })
}

async function traerFilmByID(id) {
    return client.connect()
        .then(async function () {
            return films.findOne({ _id: new ObjectId(id) })
        })
}



export {
    traerFilms,
    traerFilmByID,
}