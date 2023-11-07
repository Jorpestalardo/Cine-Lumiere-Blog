import { MongoClient, ObjectId } from "mongodb";

const client =  new MongoClient("mongodb://127.0.0.1:27017")

const db = client.db('proyectoTercerParcial')
const reviews = db.collection('Reviews')

async function create(id, review) {
    
    const newReview = {
        ...review
    }

    return client.connect()
    .then(function () {
        return reviews.findOne({film_id: new ObjectId(id)})
    })

    .then(function () {
        return reviews.insertOne(newReview)
    })
    .then(function (result){
        return newReview
    })
}

async function findAll(id) {

    const filter = {
        film_id : new ObjectId(id)
    }


    return client.connect()
        .then(async function () {
            return reviews.find(filter).toArray()
        })
}

async function traerReviewById(id, id_review) {

    return client.connect()
        .then(function () {
        return reviews.findOne({film_id: new ObjectId(id)})
        })
        .then(function () {
            return reviews.findOne({ _id: new ObjectId(id_review)})
        })
}

async function eliminarReview(id, id_review) {


    return client.connect()

    .then(function () {
        return reviews.findOne({film_id : new ObjectId(id)})
    })

    .then(function () {
        return reviews.deleteOne({_id: new ObjectId(id_review)})
    })

    .then(function (result){
        return true
    })

}

async function EditarReview(id, id_review, review) {
    
    return client.connect()

    .then(function () {
        reviews.findOne({film_id: new ObjectId(id)})        
        })

    .then(function () {
            return reviews.updateOne({_id: new ObjectId(id_review)} , {$set: review})
        })

}

export {
    create,
    findAll,
    traerReviewById,
    eliminarReview,
    EditarReview
}