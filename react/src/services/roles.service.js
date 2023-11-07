async function findAll() {
    return fetch(`http://localhost:2022/api/roles`)
    .then(response => response.json())
}

export {
    findAll
}