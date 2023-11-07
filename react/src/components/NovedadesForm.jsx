import { useEffect, useState } from "react"
import * as NovedadesServices from '../services/novedades.service.js';
import { useNavigate } from "react-router-dom"

function NovedadesForm() {

    const [name, setName] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [fechaDeEstreno, setFecha] = useState('')
    const [trailer, setTrailer] = useState('')
    const [genero, setGenero] = useState('')


    const navigate = useNavigate()


    function changeName(e)  {
        setName(e.target.value)
    }    

    function changeSinopsis(e)  {
        setSinopsis(e.target.value)
    }    

    function changeFecha(e)  {
        setFecha(e.target.value)
    }    

    function changeTrailer(e)  {
        setTrailer(e.target.value)
    }    

    function changeGenero(e)  {
        setGenero(e.target.value)
    }    


    function onSubmit(e) {
        e.preventDefault()
        NovedadesServices.create({name, sinopsis, fechaDeEstreno, trailer, genero})

        .then(() => {
            navigate("/novedades")
        })

    }


    return (
        <div className="container mb-5 ms-2 d-flex flex-column">
            <p className="novedadTitle mt-5">¿Deseas cargar una nueva novedad?</p>
        <form className="novedad d-flex flex-column" onSubmit={onSubmit}>
                <label className="m-1 mt-5  fs-5" htmlFor="">Nombre:</label>
                <input type="text" className="inpu" name="name" onChange={changeName} value={name}/>

                <label className="m-1 mt-5  fs-5" htmlFor="">Sinopsis:</label>
                <textarea rows="5" className="inpu" cols="50" name="sinopsis" onChange={changeSinopsis} value={sinopsis
                }/>

                <label className="m-1 mt-5  fs-5" htmlFor="">Fecha de estreno:</label>
                <input type="text" className="inpu" name="fechaDeEstreno" onChange={changeFecha} value={fechaDeEstreno}/>

                <label className="m-1 mt-5  fs-5" htmlFor="">Trailer:</label>
                <input type="text"  className="inpu"name="trailer" onChange={changeTrailer} value={trailer}/>

                <label className="m-1 mt-5 fs-5" htmlFor="">Genero:</label>
                <input type="text" className="inpu mb-5"  name="genero" onChange={changeGenero} value={genero}/>

                <button className="btn btn-warning m-5 " type="submit">Guardar</button>
        </form>
        </div>
    )
}

export default NovedadesForm