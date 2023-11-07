import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import * as NovedadesServices from '../services/novedades.service.js';
import React from 'react';
import NovedadesForm from "../components/NovedadesForm.jsx";
// import { Player } from 'video-react';
import { useNavigate } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import NovedadesEditar from "../components/NovedadesEditar.jsx";
import NovedadesEliminar from "../components/NovedadesEliminar.jsx";


function NovedadesDetail() {
    const {id} = useParams()

    const [novedad] = useState({})
    const [novedades, setNovedad] = useState({})


    useEffect(() => {
        NovedadesServices.findOne(id)
        .then(data => {
            setNovedad(data)
        })
    }, [id])


    

    return (
        <div className="container">
            
            <h1 className="filmName mb-5 mt-5">{novedades.name}</h1>
            <div className="movie">
            <img className="img-fluid" src= {`../../img/novedades/${novedades.img}`}   />
            
            <div  className="detail">
                <h2> <span className="lanz">Año de lanz</span>amiento</h2> <p>{novedades.fechaDeEstreno}</p>

                <h2> <span className="direc">Sinóp</span>sis</h2> <p>{novedades.sinopsis}</p> 
                
                
                <p id="genero">{novedades.genero}</p>   

                
                <a href={`${novedades.trailer}`} target="_blank" type="button" className="btn btn-outline-warning mt-5 mb-5">Ver trailer</a>
            </div>
            </div>
            
            {/* <Player
            playsInline
            src={`${novedades.trailer}`}

            /> */}

            
            <div className="container d-flex justify-content-around">
              
            <NovedadesEditar></NovedadesEditar>
            
            <NovedadesEliminar></NovedadesEliminar>

            <Link to="/novedades" type="button" className="btn btn-secondary mt-5 mb-5">Volver</Link>


        </div>
            <NovedadesForm></NovedadesForm>



        </div>





    )

}

export default NovedadesDetail