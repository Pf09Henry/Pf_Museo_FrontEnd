import React from 'react';
import './Membership.css';
import tarjeta from '../../Imagenes/tarjeta.png';
// import { Button } from 'antd';
// import { CartContext } from '../../Context';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
// import Swal from 'sweetalert2';
import PaypalSubscription from '../Paypal/PayPalSubscripcion';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';



export default function Membership() {

    const { user } = useAuth0();
   
    const subscripcion = useSelector((state => state.subscriptions))


    // const { products, saveProducts } = React.useContext(CartContext)

    // const handleAddToCart = (product) => {
    //     const newProducts = [...products, product];
    //     if (newProducts.length) {
    //         alert('Producto ya se encuentra en el carrito puedes modificarlo desde allí')
    //     } else {
    //         saveProducts(newProducts);
    //     }
    // };

    // const handleAddToCart = (producto) => {
    //     const productInCart = products.filter(pr => pr.id === producto.id)
    //     if (productInCart.length) {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'Producto ya se encuentra en el carrito puedes modificarlo desde allí',
    //             showConfirmButton: false,
    //             timer: 1500,
    //             confirmButtonColor: "#035d03"
    //         })

    //     } else {
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Producto agregado al carrito',
    //             showConfirmButton: false,
    //             timer: 1500,
    //             confirmButtonColor: "#035d03"
    //         })
    //         const newProducts = [...products, producto];
    //         saveProducts(newProducts);
    //     }
    // };

    
    var estado = false
    for (let i = 0; i < subscripcion.length; i++) {
        
        
        
        if (subscripcion[i].email === user.email && subscripcion[i].typeSubscription === 'Socio-Basic' && subscripcion[i].status === true) {
            // 
            estado = true
        } 
    }

    //   typeSubscription




    useEffect(() => {
        window.scrollTo(0, 20);
    }, []);


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className='tarjet-txt'>
                        <div className="image-wrapper">
                            <img className="tarjeta" src={tarjeta} alt="tarjeta" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Beneficios de asociado </p>
                            <li> Entrada directa, gratuita e ilimitada</li>
                            <li>1 credenciales personalizada</li>
                            <li> Ingreso gratuito con un acompañante</li>
                            <li> Inscripción gratuita a la biblioteca</li>
                            <li> 5% de descuento en eventos culturales</li>
                            <li> 5% de descuento en la tienda-librería</li>
                            <li> 5% de descuento en cafetería</li>
                            <li> 5% de descuento en cursos y actividades</li>
                            <li> 5% de descuento en talleres familiares</li>
                            <br />
                            <h4>Costo: $500 / Mes</h4>
                            <br />
                            Categorías: Afiliación, Basica
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                       {estado ?(<h3>Estas subscrito</h3>)
                       :( <PaypalSubscription name='Socio-Basic' acount='500' cupo= '0' />)}
                        {/* <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: tarjeta, id: "socio-basico", name: "BASICO", price: 500, cantidad: 1 })} >Comprar Suscripción</Button> */}
                        <br />
                        <br />
                        <Link to='/socios'>
                            <button type="button" className="btn btn-outline-success btn-secundario">Volver</button>
                        </Link>
                    </div>
                    <br />
                </div>
            </div>
        </div>

    )
}
