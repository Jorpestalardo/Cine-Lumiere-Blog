import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('proyectoTercerParcial')
const roles = db.collection('Roles')

async function traerRoles() {
    return client.connect()
        .then(async function () {
            return roles.find().toArray()
        })
}

async function traerRoleByID(id) {
    return client.connect()
        .then(async function () {
            return roles.findOne({ _id: new ObjectId(id) })
        })
}

export {
    traerRoleByID,
    traerRoles
}