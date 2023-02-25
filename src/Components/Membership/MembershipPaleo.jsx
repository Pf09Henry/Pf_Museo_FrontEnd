import React from 'react'
import './Membership.css'
import tarjeta from '../../Imagenes/tarjeta.png'
import { Button } from 'antd'
import { CartContext } from '../../Context'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Swal from 'sweetalert2';



export default function Membership() {

    const { products, saveProducts } = React.useContext(CartContext)

    const handleAddToCart = (producto) => {
        const productInCart = products.filter(pr => pr.id === producto.id)
        if (productInCart.length) {
            alert('Producto ya se encuentra en el carrito puedes modificarlo desde allí')
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })
            const newProducts = [...products, producto];
            saveProducts(newProducts);
        }
    };


    // const handleAddToCart = (e) => {
    //     const productos = products.concat(e.target.value)
    //     saveProducts(productos)
    // }

    useEffect(() => {
        window.scrollTo(0, 20);
    }, []);


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="image-wrapper">
                        <img className="tarjeta" src={tarjeta} alt="tarjeta" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Beneficios de asociado </p>
                        <li> Entrada directa, gratuita e ilimitada</li>
                        <li> 2 credenciales personalizada</li>
                        <li> Ingreso gratuito con tres acompañante</li>
                        <li> Inscripción gratuita a la biblioteca</li>
                        <li> 2 entradas gratuitas a eventos culturales (a elección del socio)</li>
                        <li> 25% de descuento en la tienda-librería</li>
                        <li> 25% de descuento en cafetería</li>
                        <li> 25% de descuento en cursos y actividades</li>
                        <li> 25% de descuento en talleres familiares</li>
                        <br />
                        <h4>Costo: $2000 / Mes</h4>
                        <br />
                        Categoría: Afiliación, Paleo
                    </div>
                    <br />
                    <br />
                    <div>
                        <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: tarjeta, id: "socio-paleo", name: "PALEO", price: 2000, cantidad: 1 })} >Agregar al Carrito</Button>
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
