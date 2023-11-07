import jwt from 'jsonwebtoken'
import * as userServices  from '../services/users.services.js'
import * as tokenServices from '../services/token.services.js'

function isLogin(req, res, next){
    const token = req.headers['auth-token']

    if(!token) {
        res.status(401).json({message: 'No se pudo enviar el token'})
        return
    }
    try{
        const payload = jwt.verify(token, 'process.env.TOKEN_SECRET')

        tokenServices.findByToken(token)
        .then(tokenFound => {
            if (!tokenFound) {
                return res.status(401).json({ message: 'Token invalido de Islogin no lo encuentra' })
            }

            userServices.findById(payload.id)
                .then(user => {
                    req.user = user
                    next()
                })
        })

    }catch(err) {
        res.status(401).json({message: 'Token inválido desde el isLOGIN'})
        return
    }

    next()
}


//funcion para acceder a los datos de un ususario LOGUEADO
function getUser(req, res, next){
    userServices.findById(req.user._id)
    .then(user => {
        if(!user){
            return res.status(401).json({message: 'Usuario no encontrado'})
        }
        req.user = user
    })
}


//acá hay que ver como accedemos a user... los datos de user como en la funcion de arriba
//tal vez usar la misma funcion de find by id, pero esta vez pedir el rol, para poder comparar. 
// function isAdmin(req, res, next){
//     if(req.user.rol !== 'admin'){
//         return res.status(401).json({message: 'No tiene permiso de administrador'})
//     }

//     next()
// }




export{
    isLogin,
    getUser
}