import { useEffect, useState } from "react";
import * as NovedadesServices from '../services/novedades.service.js';
import {Link, useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import ReactPlayer from 'react-player/youtube'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';



function Novedades() {
    const [novedades, setNovedades] = useState([])

    // const [index, setIndex] = useState(0);
      
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  

    useEffect(() => {
        NovedadesServices.traerNovedades()
        .then(data => {
            setNovedades (data)
        })
        
    }, [])


    let novedadesElements = novedades.map((elemento, i) => 
            (

                    
                <li key={i} className="col-md-6 col-sm-1">
                    <h2 className="tituloNovedad mb-5 text-center">{elemento.name} </h2>
                

                    <img src= {`../../img/novedades/${elemento.img}`} className="img-fluid"  />

                    <Link to={`/novedades/${elemento._id}`} type="button" className="btn btn-outline-warning mt-5 mb-5" >Ver detalles</Link>

                </li>

            )
    )

    let posterList = novedades.map((elemento, i) => (
        <Carousel.Item  key={i}> 
            <img className="d-block w-100" src= {`../../img/posters/${elemento.poster}`}/>
        <Carousel.Caption>
            <div>
                <h1 className="posterTitle">{elemento.name}</h1>
                <p>{elemento.genero}</p>
            </div>

            <p> <span>Estr</span>eno: {elemento.fechaDeEstreno}</p>

        <Link to={`/novedades/${elemento._id}`} type="button" className="btn btn-outline-warning mt-2">Saber Más</Link>

        </Carousel.Caption>
        </Carousel.Item>

    ))
    
    return (
        <div>
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

        {/* <h1 className="titulo m-5">Novedades</h1> */}

        <Carousel>

        {posterList}


        </Carousel>

        <div className="films container">

            <ul  className="row">
                {novedadesElements}
            </ul>



        </div>
        </div>
    )

}

export default Novedades