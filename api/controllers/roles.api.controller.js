import * as RolesServices from '../../services/roles.services.js';


function findAll(req, res) {
    RolesServices.traerRoles()
        .then(function (roles) {
            res.status(200).json(roles)
        })
}

function verRole(req, res) {
    const id = req.params.idRole

    RolesServices.traerRoleByID(id)
        .then(function (rol) {
            if (rol) {
                res.status(200).json(rol)
            } else {
                res.render('404', { message: 'Rol no encontrado' })
            }
        })
}

export {
    findAll,
    verRole
}