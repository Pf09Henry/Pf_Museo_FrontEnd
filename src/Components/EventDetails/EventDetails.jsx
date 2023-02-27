import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsById, getReview,  /*addToCart*/ } from "../../Actions/AppActions/appActions";
import './../EventDetails/EventDetail.css'
import { Tag, Rate, Button, InputNumber } from 'antd';
/* import Stars from "../Comentarios/Stars";
import CommentForm from "../Comentarios/CommentForm"; */
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../../Context";
import FormReview from "../Comentarios/FormReview";
import FormReviewInvitado from "../Comentarios/FormReviewInvitado";
import Opiniones from "../Comentarios/ComentariosyOpiniones";
import Swal from 'sweetalert2';

export default function EventDetails({ roleUser }) {
    const usuario = useSelector((state) => state.users);
    const { products, saveProducts } = React.useContext(CartContext)
    const { isAuthenticated, user } = useAuth0();


    const [cantidad, setCantidad] = useState(1)

    const handleCantidad = (e) => {
        console.log(e)
        setCantidad(e)
    }

    const detalles = useSelector((state) => state.details);
    const review = useSelector((state) => state.review);
    const dispatch = useDispatch();
    let { id } = useParams();

    function raiting(id) {
        let ratings = []
        for (let i = 0; i < review.length; i++) {
            console.log(review[i].eventId)
            if (review[i].eventId === id) {
                ratings.push(review[i].score)
            }
        }
        // console.log(ratings)
        const average = Math.round(ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length);
        return average
    }

    useEffect(() => {
        dispatch(getEventsById(id));
        //eslint-disable-next-line 
    }, [])

    const [componentDisabled, setComponentDisabled] = useState(true);

    const handleAddToCart = (e) => {
        const producto = {
            id: detalles[0].id,
            name: detalles[0].name,
            cantidad: e.target.value,
            price: detalles[0].price,
            img: detalles[0].img,
            totalPrice: detalles[0].price * cantidad,
            fecha: detalles[0].startDay
        }
        const productInCart = products.filter(pr => pr.id === producto.id)
        if (productInCart.length) {
            Swal.fire({
                title: 'Upss',
                text: 'Producto ya se encuentra en el carrito puedes modificarlo desde allí',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        } else {
            saveProducts([...products, producto])
            Swal.fire({
                title: 'OK',
                text: 'Producto agregado al carrito',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
    }

    let actual = new Date();
    let dateDetalle = detalles[0].endDay.split('/', 3)
    let diaDetalle = dateDetalle[0]
    let mesDetalle = dateDetalle[1]
    let añoDetalle = dateDetalle[2]
    let fechaEvento = new Date(añoDetalle, mesDetalle - 1, diaDetalle)

    var fechaValida = false;
    var leyenda;
    var baneado = false
    if (actual.getTime() > fechaEvento.getTime()) {
        fechaValida = true
    } else {
        console.log(fechaValida)
        leyenda = 'Aun no finaliza el evento, '
    }

    if (isAuthenticated) {
        const userBanned = usuario.filter((e) => e.email === user.email)
        if (userBanned) {
            if (userBanned[0].isBanned) {
                baneado = true
                leyenda = 'Estas baneado'
            }
        }
    }


    return (
        <div>

            <div className="contenedor-detalle-evento">
                <div className="card text-center detalle-ev">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <h3>{detalles[0].name}</h3>

                        </ul>
                    </div>
                    <div className="card-body">
                        <img src={detalles[0].img} className="img-fluid rounded-start img-evento-detail" alt="..." />
                        <h5 className="card-title">Fecha: {detalles[0].startDay} - {detalles[0].endDay} </h5>
                        <div className="detalle-evento-info">
                            <p className="card-text detalle-evento-info">{detalles[0].information} </p>
                        </div>



                        {fechaValida ? (
                            <h5> El evento ha finalizado!</h5>
                        ) : (
                            <div className="contenedor-info-evento-tickets">
                                <div>
                                    {detalles[0].availability < 10 ? <p>Quedan pocas entradas! No te quedes afuera!</p> : null}
                                    <h5>Cupos disponibles: <Tag color="#2d8c04" className="precio-evento">{detalles[0].availability} </Tag></h5>

                                </div>

                                <div className="div-precio-boton">
                                    <div><label htmlFor="">Precio</label>
                                        <Tag color="#87d068" className="precio-evento">$ {detalles[0].price.toLocaleString('en-US')}</Tag>
                                    </div>
                                    {/*  <Button value= {cantidad} onClick={()=>handleAddToCart()} className="boton-agregar-carrito ">Agregar al carrito</Button> */}
                                </div>
                                <br />


                                {/* {isAuthenticated&&(<Button type="primary" className="boton-agregar-carrito" style={{backgroundColor:"rgb(56, 102, 103"}} onClick={handleAddToCart} >Agregar al Carrito</Button>)} */}

                                {isAuthenticated &&
                                    <div>
                                        <div className="">
                                            <label clasName="cantidad-entradas" htmlFor="Quanty">Cantidad</label>
                                            <InputNumber min={1} max={10} onChange={handleCantidad} defaultValue={1} />
                                            {/* <input id="Quanty" type="range" min={0} max={5} defaultValue={1} onChange={handleCantidad} /> */}
                                            {/*   <span>{cantidad}</span> */}
                                        </div>
                                        <div className="card-body d-flex">
                                            <label htmlFor="">Precio total</label>
                                            <Tag color="#2f3e46" className="precio-evento">$ {(detalles[0].price * cantidad).toLocaleString('en-US')}</Tag>
                                        </div>
                                        <br />
                                        <div>
                                            <button type="primary" className="boton-agregar-carrito"
                                                value={cantidad}
                                                onClick={handleAddToCart}>Agregar al carrito
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                        }



                        {!fechaValida || baneado ? (
                            <h5> {leyenda} no puedes hacer comentarios.</h5>
                        ) : (


                            <div >

                                {isAuthenticated && <FormReview user={user} idEvent={id} />}
                                {!isAuthenticated && <FormReviewInvitado />}


                                <h5 className="comentarios-opiniones">Comentarios y opiniones</h5>
                                <Rate defaultValue={raiting(id)} disabled={componentDisabled} />
                                <Opiniones />
                            </div>)}

                        {/*     <Stars />
                <br></br>
                <CommentForm /> */}
                    </div>


                    {/* {isAuthenticated && <FormReview user={user} idEvent={id} />}
                {!isAuthenticated && <FormReviewInvitado/>}
                
                <h5 className="comentarios-opiniones">Comentarios y opiniones</h5>
                <Rate defaultValue={raiting(id)} disabled={componentDisabled}/>
                <Opiniones roleUser={roleUser}/> */}

                </div>

                <div className="row detalle-guia">
                    <div className="col">
                        <div className="card h-100 fondo-guide">
                            <img src={detalles[0].guide[0].image} className="card-img-top img-guia-detalle" alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">{detalles[0].guide[0].name}</h5>
                                <p className="card-text">Va a ser el Guia a cargo del evento!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div >
    )
}