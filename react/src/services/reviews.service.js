async function findAll(id) {
    return fetch(`http://localhost:2022/api/films/${id}/reviews`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        }else {
                throw new Error('No se pudo obtener las reviews')
        }
    })
}


async function create(id, review) {
    return fetch(`http://localhost:2022/api/films/${id}/reviews`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error('No se pudo acceder para crear una review en el detalle del film')
        }
    })
}


async function eliminarReview(id, id_review) {
    return fetch(`http://localhost:2022/api/films/${id}/reviews/${id_review}/delete`,{
        method: 'DELETE',
        body: JSON.stringify(id_review)
    })

    .then(response => {
        if(response.ok){
            response.json()
        }else{
            throw new Error('No se pudo obtener la review del film para eliminarla')
        }
    })
}

async function editById(id, id_review, review) {
    return fetch(`http://localhost:2022/api/films/${id}/reviews/${id_review}/edit`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(response => {
        if(response.ok){
            response.json()
        }else{
            throw new Error('No se pudo acceder para editar una review en el detalle del film')
        }
    })
}

export{ 
    findAll,
    create,
    eliminarReview,
    editById,

}