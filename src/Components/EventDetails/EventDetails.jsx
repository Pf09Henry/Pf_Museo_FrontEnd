import React from "react";
import {  useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useDispatch} from "react-redux";
import {  useParams } from "react-router-dom";
import { getEventsById,  /*addToCart*/ } from "../../Actions/AppActions/appActions";
import './../EventDetails/EventDetail.css'
import { Tag,Rate, Button } from 'antd';
/* import Stars from "../Comentarios/Stars";
import CommentForm from "../Comentarios/CommentForm"; */
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../../Context";
import FormReview from "../Comentarios/FormReview";
import FormReviewInvitado from "../Comentarios/FormReviewInvitado";
import Opiniones from "../Comentarios/ComentariosyOpiniones";

export default function EventDetails() {
    const {products, saveProducts} = React.useContext(CartContext)
    const {isAuthenticated, user} = useAuth0();

    const [cantidad, setCantidad] = useState(0)

    const handleCantidad = (e)=> {
        setCantidad(e.target.value)
    }

    const detalles = useSelector((state) => state.details);
    const review = useSelector((state) => state.review);
    const dispatch = useDispatch();
    let { id } = useParams();

    function raiting(){
        let ratings = []
        const mapRaitings = review.map((num) => {
            if(num.eventId === id){
                ratings.push(num.score)
            }
            return ratings.length
        });
        const average = Math.round(ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length);
        return average
    }

    useEffect (()=>{
        dispatch(getEventsById(id));
        //eslint-disable-next-line 
    },[dispatch]) 

    const [componentDisabled, setComponentDisabled] = useState(true);
    
    const handleAddToCart = (e) =>{       
        const producto = {
            id:detalles[0].id,
            name:detalles[0].name,
            cantidad:e.target.value,
            price:detalles[0].price,
            img:detalles[0].img,
            totalPrice:detalles[0].price * cantidad,
        }
        const productInCart = products.filter(pr => pr.id === producto.id)
        if(productInCart.length){
            alert('Producto ya se encuentra en el carrito puedes modificarlo desde allí')
        }else { 
            saveProducts([...products,producto])        
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
            <img src={detalles[0].img} className="img-fluid rounded-start img-evento-detail" alt="..."/>
                <h5 className="card-title">Fecha: {detalles[0].startDay} - {detalles[0].endDay} </h5>
                <div className="detalle-evento-info">
                <p className="card-text detalle-evento-info">{detalles[0].information} </p>
                </div>

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
                <br/>
                

                {/* {isAuthenticated&&(<Button type="primary" className="boton-agregar-carrito" style={{backgroundColor:"rgb(56, 102, 103"}} onClick={handleAddToCart} >Agregar al Carrito</Button>)} */}

                {isAuthenticated&&
                <div>
                    <div className="">
                        <label htmlFor="Quanty">Cantidad</label>
                        <input id="Quanty" type="range" min={0} max={5} defaultValue={1} onChange={handleCantidad} />
                        <span>{cantidad}</span>
                    </div>
                 <div className="card-body d-flex">
                        <label htmlFor="">Precio total</label> 
                        <Tag color="#2f3e46" className="precio-evento">$ {(detalles[0].price*cantidad).toLocaleString('en-US')}</Tag> 
                    </div> 
                    <br/>
                    <div>
                        <button type="primary" className="boton-agregar-carrito" 
                                value= {cantidad}
                                onClick={handleAddToCart}>Agregar al carrito
                        </button>
                    </div>
                </div>
                } 
               

                <div >

                {isAuthenticated && <FormReview user={user} />}
                {!isAuthenticated && <FormReviewInvitado/>}
                
                <h5 className="comentarios-opiniones">Comentarios y opiniones</h5>
                <Rate defaultValue={raiting()} disabled={componentDisabled}/>
                <Opiniones />
                </div>
                
            {/*     <Stars />
                <br></br>
                <CommentForm /> */}
            </div>
            
            </div>

            <div className="row detalle-guia">
                <div className="col">
                    <div className="card h-100 fondo-guide">
                    <img src={detalles[0].guide[0].image} className="card-img-top img-guia-detalle" alt="..."/>
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