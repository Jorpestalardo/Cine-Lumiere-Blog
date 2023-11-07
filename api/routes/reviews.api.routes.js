import express from 'express'
import * as ReviewsApiController from '../controllers/reviews.api.controller.js'

const route = express.Router()

route.route('/api/films/:idFilm/reviews')
    .get(ReviewsApiController.findReview)
    .post(ReviewsApiController.createReview)

route.route('/api/films/:idFilm/reviews/:idReview/')
    .get(ReviewsApiController.findById)

    route.route('/api/films/:idFilm/reviews/:idReview/delete')
    .delete(ReviewsApiController.deleteById)

    route.route('/api/films/:idFilm/reviews/:idReview/edit')
    .patch(ReviewsApiController.editById)

export default route