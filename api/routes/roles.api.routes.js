import express from 'express'
import * as RolesApiController from '../controllers/roles.api.controller.js'

const route = express.Router()

route.route('/api/roles')
    .get(RolesApiController.findAll)    

export default route
