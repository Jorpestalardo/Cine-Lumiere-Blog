async function create(user) {
    return fetch('http://localhost:2022/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
}

async function findById(id) {
    return fetch(`http://localhost:2022/api/users/${id}`)
    .then(response => response.json())
}

export {
    create,
    findById
}