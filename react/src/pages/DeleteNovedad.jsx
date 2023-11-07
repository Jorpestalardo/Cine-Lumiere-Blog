import { useEffect, useState } from "react";
import * as NovedadesServices from '../services/novedades.service.js';

import { useNavigate, Link, useParams } from "react-router-dom"


function DeteleNovedad() {
    const {id} = useParams()

    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()
        NovedadesServices.eliminarNovedades({id})

        .then(() => {
            navigate("/novedades")
        })

    }

    return(
        <div>
            <h1>¿Deseas eliminar esta novedad?</h1>

            <form onSubmit={onSubmit}>
                <button type="submit">Eliminar</button>
            </form>

            <Link to='/novedades'>Volver</Link>

        </div>
    )
}

export default DeteleNovedad