import express from 'express' 
import * as filmFavController from '../controllers/filmFav.api.controller.js'
import {  isLogin } from '../../middleware/auth.middleware.js'

const router = express.Router()

router.route('/api/users/:user_id/filmfav')
    .get([ isLogin], filmFavController.getFilmsFavs)
    .post([ isLogin], filmFavController.addFilmsFavs)


router.route('/api/users/:user_id/filmfav/:film_id')
    .delete([ isLogin], filmFavController.deleteFilmsFavs)



export default router;