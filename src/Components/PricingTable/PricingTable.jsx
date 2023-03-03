import React from 'react'
import './PricingTable.css'
import { Button } from 'antd'
//import { CartContext } from '../../Context'
import { Link } from "react-router-dom";



export default function PricingTable(prop) {
    // const { products, saveProducts } = React.useContext(CartContext)

    // const handleAddToCart = (e) => {
    //     const productos = products.concat(e.target.value)
    //     saveProducts(productos)
    // }

    // const handleAddToCart = (product) => {
    //     const newProducts = [...products, product];
    //     saveProducts(newProducts);
    // };

    return (

        <body>
            <div class="container">
                <div class="column">
                    <div class="pricing-card basic">
                        <div class="pricing-header">
                            <span class="plan-title" name={'basico'}>BASICO</span>
                            <div class="price-circle">
                                <span class="price-title">
                                    <small>$</small><span>500</span>
                                </span>
                                <span class="info"> Mensual</span>
                            </div>
                        </div>
                        <div class="badge-box">
                            <span>Off 5% <div>Descuentos generales</div></span>
                        </div>
                        <ul>
                            <li>
                                <strong>Ingreso Gratis Ilimitado</strong>
                            </li>
                            <li>
                                <strong>1</strong>Credencial
                            </li>
                            <li >
                                <strong >1</strong> Acompañante por Credencial
                            </li>
                        {/*     <li className="tachado">
                                <strong></strong> Invitacion a Eventos
                            </li>
                            <li>
                                <strong></strong> Inscripción a Biblioteca
                            </li> */}
                        </ul>
                        <div class="buy-button-box">
                            <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103)" }}>
                                <Link to={{ pathname: `/membership-basico` }}>
                                    Ver mas
                                </Link>
                            </Button>
                            {/* <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ id: "socio-basico", name: "BASICO", price: 500 })} >Agregar al Carrito</Button> */}
                            {/* value=  hacer el array con los elementso */}
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="pricing-card eco">
                        <div class="pricing-header">
                            <span class="plan-title" name={'eco'}>ECO</span>
                            <div class="price-circle">
                                <span class="price-title">
                                    <small>$</small><span>1000</span>
                                </span>
                                <span class="info"> Mensual</span>
                            </div>
                        </div>
                        <div class="badge-box">
                            <span>Off 10% <div>Descuentos generales</div></span>
                        </div>
                        <ul>
                            <li>
                                <strong>Ingreso Gratis Ilimitado</strong>
                            </li>
                            <li>
                                <strong>1</strong>Credencial
                            </li>
                            <li >
                                <strong >2</strong> Acompañantes por Credencial
                            </li>
                           {/*  <li>
                                <strong>1</strong> Invitacion a Eventos
                            </li>
                            <li>
                                <strong></strong> Inscripción a Biblioteca
                            </li> */}
                        </ul>
                        <div class="buy-button-box">
                            <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103)" }}>
                                <Link to={{ pathname: `/membership-eco` }}>
                                    Ver mas
                                </Link>
                            </Button>
                            {/* <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ id: "socio-eco", name: "ECO", price: 1000 })} >Agregar al Carrito</Button> */}
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="pricing-card business">
                        <div class="pricing-header">
                            <span class="plan-title">PALEO</span>
                            <div class="price-circle">
                                <span class="price-title">
                                    <small>$</small><span>2000</span>
                                </span>
                                <span class="info"> Mensual</span>
                            </div>
                        </div>
                        <div class="badge-box">
                            <span>Off 15% <div>Descuentos generales</div></span>
                        </div>
                        <ul>
                            <li>
                                <strong>Ingreso Gratis Ilimitado</strong>
                            </li>
                            <li>
                                <strong>2</strong>Credenciales
                            </li>
                            <li >
                                <strong >3</strong> Acompañantes por Credencial
                            </li>
                          {/*   <li>
                                <strong>2</strong> Invitacion a Eventos
                            </li> */}
                           {/*  <li>
                                <strong></strong> Inscripción a Biblioteca
                            </li> */}
                        </ul>
                        <div class="buy-button-box">
                            <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103)" }}>
                                <Link to={{ pathname: `/membership-paleo` }}>
                                    Ver mas
                                </Link>
                            </Button>
                            {/* <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ id: "socio-paleo", name: "PALEO", price: 2000 })} >Agregar al Carrito</Button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Button type="button" className="btn btn-outline-success btn-secundario" onClick={() => window.history.back()}>
                <span>Volver Atrás</span>
            </Button>
            <br />
            <br />
        </body >
    )
}