import React from 'react';
import * as ReviewServices from '../services/reviews.service.js';
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Notificar from "./Notify.jsx";


function ReviewsDelete() {
    const {id} = useParams();
    const {id_review} = useParams();

    const navigate = useNavigate()


    function eliminarReview(e) {
        e.preventDefault()
        ReviewServices.eliminarReview(id, id_review)

        .then(() => {
            navigate(`/films/${id}`)
        })    
    }

    return (
        <div>
            <h1 className="tituloReviewDelete mt-5">¿Querés eliminar esta review?</h1>
            <div className="d-flex justify-content-center">
            <form onSubmit={eliminarReview}>
                

                <button type="submit" value={id_review}  className="btn btn-danger mt-5 mb-5" onClick={Notificar}>Eliminar</button>
            </form>

            
            <Link to={`/films/${id}`} type="button" className="btn btn-secondary mt-5 mb-5 ms-5">Volver</Link>
            </div>

        </div>
    )

}

export default ReviewsDelete
