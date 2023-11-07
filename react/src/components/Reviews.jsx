import { useEffect, useState } from "react"
import * as ReviewServices from '../services/reviews.service.js';
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';



function Reviews() {
    const {id} = useParams();
    const {id_review} = useParams();

    const navigate = useNavigate()


    const [opiniones, setOpiniones] = useState([])
    
    const [reviews, setReviews] = useState({})
    const [usuario, setUsuario] = useState('')
    const [testimonio, setTestimonio] = useState('')


    




    function changeUsuario(e)  {
        setUsuario(e.target.value)
    } 

    function changeTestimonio(e)  {
        setTestimonio(e.target.value)
    } 



    useEffect(() => {
        ReviewServices.findAll(id)
        .then(data => {
            setOpiniones(data)
        })
    }, [id])


    function agregarReview(e) {
        e.preventDefault()
        ReviewServices.create(id,{usuario, testimonio, film_id: id})  
    }


    let opinionesElements = opiniones.map((elemento, i) => 
            (
            <li className="m-3" key={i}>
                <h2 className="tituloReview" >{elemento.usuario} </h2>
                
                <p className="sinop">{elemento.testimonio}</p>
                
                    
            <div className="d-grid gap-2 d-md-block  mt-5">

            <Link to={`/films/${elemento.film_id}/reviews/${elemento._id}/delete`} type="button" variant="primary" value={elemento._id}  className="btn btn-outline-danger mb-5" >Eliminar comentario</Link>

            <Link to={`/films/${elemento.film_id}/reviews/${elemento._id}/edit`} type="button" variant="primary"  className="btn btn-outline-warning mb-5" >Editar comentario</Link>

            </div>
                </li>

            )
    )

    
    return (

        <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            <div>
            <ul className="reviews">
                {opinionesElements}
            </ul>
            </div>

            

            <div className="comentar container d-flex flex-column align-items-center">

            <h3 className="regisTitle text-center"><span className="lanz">Pon un Comen</span>tario!</h3>

            <form  className="regis d-flex flex-column mt-5 " onSubmit={agregarReview}>
                <label htmlFor="">Tu nombre:</label>
                <input className="inpu" type="text" name="usuario" onChange={changeUsuario} value={usuario}/>

                <label className="mt-5">Comparte tu opinión:</label>
                <textarea className="inpu" onChange={changeTestimonio} value={testimonio} rows="5" cols="50"></textarea>
                

                <button className="btn btn-warning mt-5 mb-5" type="submit" onClick={() => window.location.reload(false)}>Agregar</button>

            </form>
            </div>
        </div>
    )
}

export default Reviews