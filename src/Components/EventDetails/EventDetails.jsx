import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsById } from "../../Actions/AppActions/appActions";
import './../EventDetails/EventDetail.css'
import { Tag } from 'antd';
import CommentForm from "../Review/Comments/CommentForm";
import { Link } from 'react-router-dom';
import Rating from "../Review/Stars/Stars";

=======
import { useDispatch} from "react-redux";
import {  useParams } from "react-router-dom";
import { getEventsById, /*addToCart*/ } from "../../Actions/AppActions/appActions";
import './../EventDetails/EventDetail.css'
import { Tag, Button } from 'antd';
import Stars from "../Comentarios/Stars";
import CommentForm from "../Comentarios/CommentForm";
>>>>>>> master

export default function EventDetails({saveProducts}) {

    const detalles = useSelector((state) => state.details);
    const dispatch = useDispatch();
    let { id } = useParams();


    useEffect(() => {
        dispatch(getEventsById(id));
<<<<<<< HEAD
    }, [dispatch])

=======
        //eslint-disable-next-line 
    },[dispatch]) 
    
    const handleAddToCart = () =>{
        const arrayProducts = JSON.parse(localStorage.getItem('CART_V1'))
        const productos = arrayProducts.concat(detalles)
        saveProducts(productos)
    }
>>>>>>> master

    return (
        <div>

<<<<<<< HEAD

            <div class="contenedor-detalle-evento">
                <div class="card text-center detalle-ev">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <h3>{detalles[0].name}</h3>

                        </ul>
=======
            <div className="contenedor-detalle-evento">
            <div className="card text-center detalle-ev">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                <h3>{detalles[0].name}</h3>
                
                </ul>
            </div>
            <div className="card-body">
            <img src={detalles[0].img} className="img-fluid rounded-start img-evento-detail" alt="..."/>
                <h5 className="card-title">Fecha: {detalles[0].startDay} - {detalles[0].endDay} </h5>
                <div className="detalle-evento-info">
                <p className="card-text detalle-evento-info">{detalles[0].information} </p>
                </div>
                <Tag color="#87d068" className="precio-evento">${detalles[0].price}</Tag>
                <hr></hr>
                <Stars />
                <CommentForm />
            </div>
                <Button type="primary" style={{backgroundColor:"rgb(56, 102, 103"}} onClick={handleAddToCart} >Agregar al Carrito</Button>
            </div>

            <div className="row detalle-guia">
                <div className="col">
                    <div className="card h-100 fondo-guide">
                    <img src={detalles[0].guide[0].image} className="card-img-top img-guia-detalle" alt="..."/>
                    <div className="card-body ">
                        <h5 className="card-title">{detalles[0].guide[0].name}</h5>
                        <p className="card-text">Va a ser el Guia a cargo del evento!</p>
>>>>>>> master
                    </div>
                    <div class="card-body">
                        <img src={detalles[0].img} class="img-fluid rounded-start img-evento-detail" alt="..." />
                        <h5 class="card-title">Fecha: {detalles[0].startDay} - {detalles[0].endDay} </h5>
                        <div className="detalle-evento-info">
                            <p class="card-text detalle-evento-info">{detalles[0].information} </p>
                        </div>
                        <Tag color="#87d068" className="precio-evento">${detalles[0].price}</Tag>

                        <div className='linea'></div>
                        <br />
                        <h5>Que te parecio?</h5>

                        <div className='rating'>
                            <Rating />
                            <CommentForm />
                        </div>
                    </div>
                    <br />

                    <Link to='/eventos'>
                        <button type="button" class="btn btn-outline-success btn-secundario">Volver</button>
                    </Link>

                </div>


                <div class="row detalle-guia">
                    <div class="col">
                        <div class="card h-100 fondo-guide">
                            <img src={detalles[0].guide[0].image} class="card-img-top img-guia-detalle" alt="..." />
                            <div class="card-body ">
                                <h5 class="card-title">{detalles[0].guide[0].name}</h5>
                                <p class="card-text">Va a ser el Guia a cargo del evento!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


<<<<<<< HEAD















            {/*     <div className="titulo-img">
=======
        {/*     <div className="titulo-img">
>>>>>>> master
                <h1 class="card-title">{detalles[0].name}</h1>
                <img className="img-detalle-evento" src={detalles[0].img} alt="banner_paleo" />

            </div>
            <br />


            <div class="card-body-eventodetail">

                <div>
                <h3 class="card-text">Categoria: {detalles[0].category[0].name} </h3>
                </div>
                <div>
                <p class="card-text">Información: {detalles[0].information} </p>
                </div>
                <div>
                <p class="card-text">Precio: $ {detalles[0].price} </p>
                </div>
                <div>
                <p class="card-text">Fecha: {detalles[0].startDay} - {detalles[0].endDay} </p>
                </div>
                <div>



                <div>
                <h3 class="card-text">Guia a cargo : {detalles[0].guide[0].name}</h3>
                </div>
                <div>
                <img className="img-guide" src={detalles[0].guide[0].image} alt="banner_paleo" />
                </div>
                </div>
            </div> */}

        </div >
    )
}