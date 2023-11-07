import express from 'express'
import * as usersController from '../controllers/users.api.controller.js'
import { isLogin } from '../../middleware/auth.middleware.js'


const router = express.Router()

router.route('/api/users/login')
    .post(usersController.login)

router.route('/api/users/logout')
    .post([isLogin], usersController.logout)

router.route('/api/register')
    .post(usersController.create)

router.route('/api/users')
    .get(usersController.traerTodos)

router.route('/api/users/:id')
    .get([isLogin], usersController.findById)
    .delete([ isLogin], usersController.remove)



export default router