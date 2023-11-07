import express from 'express'
import cors from 'cors'

import FilmsApiRoute from './api/routes/films.api.routes.js'
import ReviewsApiRoute from './api/routes/reviews.api.routes.js'
import FavsApiRoute from './api/routes/favs.api.routes.js'
import NovedadesApiRoute from './api/routes/novedades.api.routes.js'
import UsuariosApiRoute from './api/routes/usuarios.api.routes.js'
import RolesApiRoute from './api/routes/roles.api.routes.js'

const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', express.static('public'))

app.use('/', FilmsApiRoute)
app.use('/', FavsApiRoute)
app.use('/', ReviewsApiRoute)
app.use('/', NovedadesApiRoute)
app.use('/', UsuariosApiRoute)
app.use('/', RolesApiRoute)


app.listen(2022, function () {
    console.log('El servidor esta on! http://localhost:2022')
})













