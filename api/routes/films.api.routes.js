
import express from 'express'
import * as FilmsApiController from '../controllers/films.api.controller.js'

const route = express.Router()

route.route('/api/films')
    .get(FilmsApiController.findAll)    


route.route('/api/films/:idFilm')
    .get(FilmsApiController.verFilms)

export default route