import { useEffect, useState } from "react"
import * as ReviewServices from '../services/reviews.service.js';
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import NotificarEdit from "./NotifyEdit.jsx";



function ReviewsEdit() {

    const {id} = useParams();
    const {id_review} = useParams();

    const navigate = useNavigate()

    const [reviews, setReviews] = useState({})
    const [usuario, setUsuario] = useState('')
    const [testimonio, setTestimonio] = useState('')

    function changeUsuario(e)  {
        setUsuario(e.target.value)
    }    

    function changeTestimonio(e)  {
        setTestimonio(e.target.value)
    }    

    function editarReview(e) {
        e.preventDefault()
        ReviewServices.editById(id, id_review, {testimonio, usuario})

        .then(() => {
            navigate(`/films/${id}`)
        })    

    }

    return (
        <div>
            <h1 className="tituloReview mt-5">Editar tu comentario</h1>

            <div className="container d-flex flex-column align-items-center mt-5">

            <form  className="regis d-flex flex-column justify-content-center" onSubmit={editarReview}>
                <label htmlFor="">Cambiar nombre de usuario</label>
                <input className="inpu" type="text" name="usuario" onChange={changeUsuario} value={usuario}/>

                <label className="mt-5">Cambiar tu opinión</label>
                <textarea className="inpu" onChange={changeTestimonio} value={testimonio} rows="5" cols="50"></textarea>
                

                <button className="btn btn-warning m-5" type="submit" onClick={NotificarEdit}>Agregar</button>
            </form>
            </div>
            
            <Link to={`/films/${id}`} type="button" className="btn btn-secondary mt-5 mb-5 ms-5">Volver</Link>

        </div>
    )

}

export default ReviewsEdit
