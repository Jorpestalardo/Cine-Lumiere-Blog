import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('proyectoTercerParcial')
const filmFav = db.collection('Fav')

async function getFilmFavs(user_id) {
    return client.connect()
    .then ( function() {
        return filmFav.findOne({user_id})
    })
}

// $push agrega sin importar cuanto el addToSet te agrega pero sin repetir 

async function addFilmFavs(user_id, film_id) {

    return client.connect()
    .then(function (filmFav) {
        return filmFav.findOne({ user_id},
         {
            $addToSet: { films: new ObjectId(film_id) }
         })
    })

    .then(function (result) {
        if (result.modifiedCount === 0) {
            return filmFav.insertOne({ user_id, films: [new ObjectId(film_id)] })
        }
    })

}

// $pull es sacar

async function deleteFilmFavs(user_id, film_id) {
    return client.connect()
    .then ( function() {
        return filmFav.updateOne({user_id}, {$pull: {films: new ObjectId (film_id) }} )
    })
}




export {
    addFilmFavs,
    deleteFilmFavs,
    getFilmFavs
}