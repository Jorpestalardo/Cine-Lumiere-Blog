import express from 'express'
import * as NovedadesApiController from '../controllers/novedades.api.controller.js'
import {  isLogin } from '../../middleware/auth.middleware.js'



const route = express.Router()

route.route('/api/novedades')
    .get(NovedadesApiController.findAll)
    .post([ isLogin],NovedadesApiController.create)

route.route('/api/novedades/:idNovedad')
    .get( NovedadesApiController.findOne)
    .patch(NovedadesApiController.editById)
    .delete( NovedadesApiController.deleteById)
    .put( NovedadesApiController.replaceById)




export default route