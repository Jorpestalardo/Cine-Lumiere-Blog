import * as usersServices from '../../services/users.services.js';
import * as tokenServices from '../../services/token.services.js'
import jwt from 'jsonwebtoken'

function login(req, res) {
    const userLogin = {
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol,
    }

    usersServices.login(userLogin)
    .then(user => {
        const token = jwt.sign({id: user._id, rol: user.rol}, 'process.env.TOKEN_SECRET')

        tokenServices.create({ token, user_id: user._id })

        res.json({ token, user })

    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
}

function logout(req, res){
    const token = req.headers['auth-token']

    tokenServices.deleteByToken(token)

    res.json({message: 'Logout exitoso'})
}



function traerTodos(req, res) {
    const filter = {} 

    // EN EL THUNDER HAY QUE IR AL APARTADO DE HEADERS Y AÑADIR ESE NOMBRE CON EL RESPECTIVO TOKEN PARA VERiFICAR
    const token = req.headers['auth-token']

    if(!token) {

        res.status(401).json({message: 'No se pudo enviar el token'})
        return
    }

    try{
        const payload = jwt.verify(token, 'process.env.TOKEN_SECRET')
    }
    catch(err) {
        res.status(401).json({message: 'Token inválido'})
        return
    }
    
    
    usersServices.find(filter)
        .then(users => {
            res.json(users)
        })
}


function findById(req, res) {
    const id  = req.params.idUsuario
    const token = req.headers['auth-token']
    
    if(!token) {
        
        res.status(401).json({message: 'No se pudo enviar el token'})
        return
    }    
    
    try{
        const payload = jwt.verify(token, 'process.env.TOKEN_SECRET')
    }
    catch(err) {
        res.status(401).json({message: 'Token inválido'})
        return
    }

    usersServices.findById(id)
    .then(function (user) {
        if (user) {
            res.status(200).json(user)
        } else {
            res.render('404', { message: 'usuario no encontrado' })
        }
    })
        
}


function create(req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol,
    }

    usersServices.create( user)
    .then(function (user) {
        res.json(user)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
}

function remove(req, res){
    const id = req.params.id

    usersServices.remove(id)

    .then( () => {
        res.json({message: 'Se eliminó!'})
    })

    .catch(err => {
        res.status(500).json({message: err.message})
    })
}



export {
    create,
    traerTodos,
    remove,
    login,
    logout,
    findById
}