import * as FilmsServices from '../../services/films.services.js';

function findAll(req, res) {
    const filter = {}

    if (req.query.genero){
        filter.genero = req.query.genero
    }


   FilmsServices.traerFilms(filter)
        .then(function (films) {
            res.status(200).json(films)
        })
}


function verFilms(req, res) {
    const id = req.params.idFilm

   FilmsServices.traerFilmByID(id)
        .then(function (film) {
            if (film) {
                res.status(200).json(film)
            } else {
                res.render('404', { message: 'Película no encontrada' })
            }
        })
}


export {
    findAll,
    verFilms,
}