import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import * as FilmsServices from '../services/films.service.js';
import React from 'react';
import Reviews from "../components/Reviews.jsx";
// import { Player } from 'video-react';



function Detalles() {
    const {id} = useParams()
    
    const [films, setFilm] = useState({})

    useEffect(() => {
        FilmsServices.verFilms(id)
        .then(data => {
            setFilm(data)
        })
    }, [id])

    

    return (
        <div className="container">
            <h1 className="filmNameDetail mb-5 mt-5">{films.name}</h1>
            <div className="movie">
            <img  className="img-fluid" src= {`../../img/${films.img}`}   />
            
            <div  className="detail">
                <h2> <span className="lanz">Año de lanz</span>amiento</h2> <p>{films.año}</p>
                <h2> <span className="direc">Direc</span>tor</h2> <p>{films.director}</p>


                <h2> <span className="direc">Sinóp</span>sis</h2> <p>{films.sinopsis}</p>

                <h2> <span className="direc">Repa</span>rto</h2>
                <ul>
                    <li>
                        {films.actores}
                    </li>
                </ul>

                <p><span className="punto">{films.punto}</span>/5</p>


                <p id="genero">{films.genero}</p>   

                
                <a href={`${films.trailer}`} target="_blank" type="button" className="btn btn-outline-warning mt-5 ms-3 mb-5">Ver trailer</a>
            </div>


            </div>

   

            
            {/* <Player
            playsInline
            src={`${films.trailer}`}

            /> */}


            <Link to="/films" type="button" className="btn btn-secondary mt-5 mb-5 ms-3">Volver</Link>


            <Reviews></Reviews>
        </div>
    )

}

export default Detalles