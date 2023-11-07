const films = {
    _id: ObjectId('6343b0f4e4780eababba1749'),
    name: "Chucky",
    sinopsis: "En ésta app podrás comprar cartuchos de Sega Génesis originales.",
    img: "http://miweb.com/proyecto",
    genero: "terror",
    actores: [
        "robert deniro", 
        "brad pitt"
    ],
    directores: [
        "Pepito Chavez"
    ],
    punto: 1,
    año: 2000,
    trailer: "http://miweb.com/proyecto"
}

const reviews = {
    film_id: ObjectId('6343b0f4e4780eababba1749'),
    usuario: "Juan Perez",
    testimonio: "Excelente diseño, trabajo en tiempo y forma, siempre dispuesta a mejorar el proyecto."
}

const fav = {
    user_id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    films: [film_id]
}

const usuarios = [{
    _id: ObjectId('5f9c1b9b9c9d2b1b8c8c8c8c'),
    name: "Juan",
    password: "1234",
    email: "juan@gmail.com",
}]



const novedades = {
    _id: ObjectId('6343b0f4e4780eababba1749'),
    name: "Robertita",
    sinopsis: "En ésta app podrás comprar cartuchos de Sega Génesis originales.",
    img: "http://miweb.com/proyecto",
    fechaDeEstreno: 2023,
    trailer: "http://miweb.com/proyecto"
}