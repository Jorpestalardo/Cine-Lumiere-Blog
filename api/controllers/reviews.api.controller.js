import * as reviewServices from '../../services/reviews.services.js';
import { ObjectId } from "mongodb";

function createReview(req, res){
    const id = req.params.idFilm

            const review = {
                usuario: req.body.usuario,
                testimonio: req.body.testimonio,
                film_id : new ObjectId(req.body.film_id)
            }
        
            reviewServices.create(id, review)
            .then(function (result){
                res.status(201).json(result)
            })
}


function findReview(req, res){
    const id = req.params.idFilm

    reviewServices.findAll(id)
    .then(function(result){
        res.status(200).json(result)
    })
}

function findById(req, res){

    const id_review = req.params.idReview

    reviewServices.traerReviewById(id_review)
    .then(function (review){
        if (review){
            res.status(200).json(review)
        } else {
            res.status(404).json({message: "No se pudo encontrar la review"})
        }
    })
}

function deleteById(req, res){
    
    const id = req.params.idFilm
    const id_review = req.params.idReview

        reviewServices.eliminarReview(id, id_review)
        .then(function (review) {
            if (review) {
                res.status(200).json(review)
            } else {
                res.status(404).json("404", { message: "Review no encontrada" })
            }
        })
}

function editById(req, res){
    const id = req.params.idFilm
    const id_review = req.params.idReview

    const review = {}

    if (req.body.usuario){
        review.usuario = req.body.usuario
    }

    if (req.body.testimonio){
        review.testimonio = req.body.testimonio
    }    

    reviewServices.EditarReview(id, id_review, review)
    .then(function (review) {
        if (review) {
            res.status(200).json(review)
        } else {
            res.status(404).json("404", { message: "Review no encontrada" })
        }
    })
}

export {
    createReview,
    findReview,
    findById,
    deleteById,
    editById
}