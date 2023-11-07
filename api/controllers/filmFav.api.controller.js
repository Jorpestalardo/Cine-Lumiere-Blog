import * as FavsService from '../../services/favs.services.js'

async function getFilmsFavs(req, res) {
    const user_id = req.params.user_id
    const filmFavs = await FavsService.getFilmFavs(user_id)

    res.json(filmFavs)
}


async function addFilmsFavs(req, res) {

    const user_id = req.params.user_id
    const film_id = req.body.film_id

    const filmFavs = await FavsService.addFilmsFavs(user_id, film_id)

    res.json({ message: 'Película agregado a favorito con exito' })
}


async function deleteFilmsFavs(req, res) {
    const user_id = req.params.user_id
    const film_id = req.params.film_id

    const filmFavs = await FavsService.removeFilmFavs(user_id, film_id)
}

export {
    getFilmsFavs,
    addFilmsFavs,
    deleteFilmsFavs
}