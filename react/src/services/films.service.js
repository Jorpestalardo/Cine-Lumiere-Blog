async function findAll() {
    return fetch('http://localhost:2022/api/films')
    .then(response => response.json())
}

async function verFilms(id) {
    return fetch(`http://localhost:2022/api/films/${id}`)
    .then(response => response.json())
}

export{
    findAll,
    verFilms
}