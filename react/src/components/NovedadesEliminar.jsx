import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as NovedadesServices from '../services/novedades.service.js';
import React from 'react';
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Notificar from "./Notify.jsx";



function NovedadesEliminar() {
    const {id} = useParams()


    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function eliminarNovedad(e) {
        e.preventDefault()
        NovedadesServices.eliminarNovedades(id)

        

        .then(() => {
            navigate("/novedades")
        })

    }

    return (
        <div>
            
            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="modalEliminar" closeButton >
                <Modal.Title className="modalTtile ">¿Estás seguro de que quieres eliminar esta novedad?</Modal.Title>
              </Modal.Header>
            <Modal.Body className="modalEliminar">            
              <div className="d-flex flex-row justify-content-center">
              <form onSubmit={eliminarNovedad}>
                <button type="submit" value={id} onClick={Notificar} className="btn btn-danger mt-5 mb-5">Eliminar</button>
              </form>

              <Button variant="secondary" className="m-5 " onClick={handleClose}>
                      Volver
                </Button>
            </div>

            </Modal.Body>


            </Modal>

            <button variant="primary" onClick={handleShow} value={id}  className="btn btn-outline-danger mt-5 mb-5">Eliminar</button>
        </div>
    )
}

export default NovedadesEliminar