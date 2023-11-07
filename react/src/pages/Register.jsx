import { useEffect, useState } from "react"
import * as usersServices from '../services/user.service.js';

import * as RolesServices from '../services/roles.service.js';


import { useNavigate } from "react-router-dom"


function Register() {
    const [name, setName] = useState('')

    const [rol, setRol] = useState('')
    
    const [role, setRole] = useState([])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    function changeName(e)  {
        setName(e.target.value)
    }    

    function changeRol(e)  {
        setRol(e.target.value)
    }

    function changeEmail(e)  {
        setEmail(e.target.value)
    }

    function changePassword(e)  {
        setPassword(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        usersServices.create({name, email, password, rol})

        .then(() => {
            navigate("/iniciar-sesion")
        })

    }

    useEffect(() => {
        RolesServices.findAll()
        .then((data)=>{
            setRole(data)
            setRol(data[0].name)
        })
    }, [])

    let selectRol = role.map((rol, i) => 
        (
            <option
            className="option"
            key={i}
            value={rol.id}>
            {rol.nombre}
            </option>
        )

    )


    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="regisTitle text-center m-5"><span className="lanz">Regist</span>rate!</h1>

            <form  className="regis d-flex flex-column" onSubmit={onSubmit}>
                <label className=" m-1 fs-5" htmlFor="">Nombre</label>
                <input type="text" className="inpu" name="name" onChange={changeName} value={name}/>

                <label className="m-1 fs-5" htmlFor="">Email</label>
                <input type="text" className="inpu" name="email" onChange={changeEmail} value={email}/>

                <label className="m-1 fs-5" htmlFor="">Contraseña</label>
                <input type="text" className="inpu" name="password" onChange={changePassword} value={password}/>

                <label className="m-1 fs-5" htmlFor="">Elegí tu rol</label>
                <select  className="select m-1 fs-5" onChange={changeRol} value={rol} >
                <option value="" className="optionDisabled" disabled>Elija una opción</option>
                    {selectRol}
                </select>

                <button className="btn btn-warning m-5" type="submit">Registrarme</button>

            </form>
        </div>
    )
}

export default Register