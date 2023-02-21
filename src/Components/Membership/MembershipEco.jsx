import React from 'react'
import './Membership.css'
import tarjeta from '../../Imagenes/tarjeta.png'
import { Button } from 'antd'
import { CartContext } from '../../Context'
import { Link } from "react-router-dom";
import { useEffect } from 'react';



export default function Membership() {

    const { products, saveProducts } = React.useContext(CartContext)

    const handleAddToCart = (product) => {
        const newProducts = [...products, product];
        saveProducts(newProducts);
    };


    // const handleAddToCart = (e) => {
    //     const productos = products.concat(e.target.value)
    //     saveProducts(productos)
    // }

    useEffect(() => {
        window.scrollTo(0, 0);
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
                        <li> 1 credenciales personalizada</li>
                        <li> Ingreso gratuito con dos acompañante</li>
                        <li> Inscripción gratuita a la biblioteca</li>
                        <li> Ingreso gratuito a 1 eventos cultural (a eleccion del socio)</li>
                        <li> 15% de descuento en la tienda-librería</li>
                        <li> 15% de descuento en cafetería</li>
                        <li> 15% de descuento en cursos y actividades</li>
                        <li> 15% de descuento en talleres familiares</li>
                        <br />
                        <h4>Costo: $1000 / Mes</h4>
                        <br />
                        Categorías: Afiliación, Eco
                    </div>
                    <br />
                    <br />
                    <div>
                        <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: tarjeta, id: "socio-eco", name: "ECO", price: 1000 })} >Agregar al Carrito</Button>
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
