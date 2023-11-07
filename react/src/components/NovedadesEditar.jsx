import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as NovedadesServices from '../services/novedades.service.js';
import React from 'react';
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function NovedadesEditar() {
    const {id} = useParams()


    const [novedades, setNovedad] = useState({})
    const [name, setName] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [fechaDeEstreno, setFecha] = useState('')
    const [trailer, setTrailer] = useState('')
    const [genero, setGenero] = useState('')
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        NovedadesServices.findOne(id)
        .then(data => {
            setNovedad(data)
        })
    }, [id])

     
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

    const navigate = useNavigate()

    function editarNovedad(e) {
        e.preventDefault()
        NovedadesServices.editarNovedades(id, {name, sinopsis, fechaDeEstreno, trailer, genero})

        .then(() => {
            navigate("/novedades")
        })

    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title className="editarTitle" id="contained-modal-title-vcenter">
                        Editar Novedad
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="novedad" onSubmit={editarNovedad}>
                        <Form.Group className=" novedad mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="label">Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus className="inpu"
                                onChange={changeName}
                                value={name}
                            />
                        </Form.Group>
                        <Form.Group className="novedad mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="label">Fecha de Estreno</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus 
                                className="inpu"
                                onChange={changeFecha}
                                value={fechaDeEstreno}
                            />
                        </Form.Group>
                        <Form.Group
                            className="novedad mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label className="label">Sinopsis</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={changeSinopsis} className="inpu" id="textarea" value={sinopsis} />
                        </Form.Group>
                        <Form.Group className="novedad mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="label">Género</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus 
                                className="inpu"
                                onChange={changeGenero}
                                value={genero}
                            />
                        </Form.Group>
                        <Button className="btn mt-5" variant="success" type="submit">
                            Editar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-secondary" onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div>
            <>
                <Button variant="btn btn-outline-warning btn mt-5 mb-5" onClick={() => setModalShow(true)}>
                    Editar
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)} />
            </>
        </div>
    )
}

export default NovedadesEditar