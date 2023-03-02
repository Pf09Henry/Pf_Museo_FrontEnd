import React from 'react'
import './Entradas.css'
import logo from '../../Imagenes/logo circular.png'
import { CartContext } from '../../Context';
import { Button } from 'antd';
import pata from '../../Imagenes/Pictures_Biologia/BiologicaPataLargarto.jpg'
import lagarto from '../../Imagenes/Pictures_Biologia/LagartoUno.jpg'
import buho from '../../Imagenes/Pictures_Biologia/Buho.jpg'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth0 } from "@auth0/auth0-react";


export default function Entradas() {

    const { products, saveProducts } = React.useContext(CartContext)
    const { isAuthenticated, user } = useAuth0();


    function clickAuth() {
        Swal.fire({
            title: 'Upss',
            text: 'Inicia sesión para ver tu carrito!',
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: "#035d03"
        })

    }

    const handleAddToCart = (producto) => {
        const productInCart = products.filter(pr => pr.id === producto.id)
        if (productInCart.length) {
            Swal.fire({
                title: 'Upss',
                text: 'Producto ya se encuentra en el carrito puedes modificarlo desde allí',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: "#035d03"
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500,
                confirmButtonColor: "#035d03"
            })
            saveProducts([...products, producto])
        }
    };

    let date = new Date().toJSON().slice(0, 10)

    useEffect(() => {
        window.scrollTo(0, 130);
    }, []);


    return (
        <main>
            <div className="container-fluid px-4 py-1" id="custom-cards">

                <h2 className="pb-2 my-4 fw-bold display-5 text-success ">Entradas</h2>

                {/* <div className="row row-cols-1 row-cols-md-3 align-items-center g-4 py-5"> */}
                <div className="d-grid h-100 align-items-center">
                    <div className='row' >
                        <div className="col flipCardEntry">
                            <div className="flip-card-entry-inner shadow ">
                                <div className="flip-card-entry-front">
                                    <img src={logo} alt="Logo" width="32" height="32" className="rounded-circle border border-white my-1" />
                                    <img className='pata-lagarto' src='/src/Imagenes/Pictures_Biologia/BiologicaPataLargarto.jpg' alt='' />
                                    <h3 className="mt-3 mb-4 display-6 fw-bold text-light">Semana</h3>
                                </div>
                                <div className=' container  flip-card-entry-back' >
                                    <h4 className='pt-4 mt-3 mb-4 display-6 fw-bold text-dark' >Valor: $ 500</h4>
                                    <h4 className="pt-2 mt-1 mb-4  lh-1 fw-bold text-dark">Martes a Viernes</h4>
                                    <div className='container overflow-hidden'>
                                        <div className='d-flex justify-content-center'>
                                            {isAuthenticated
                                                ? <Button type="primary" className="btn-block text-wrap text-center" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: pata, id: "entry-week", name: "Entrada Semana", price: 500, cantidad: 1, fecha: date })} >Agregar al Carrito</Button>
                                                : <Button type="primary" className="btn-block text-wrap text-center" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={clickAuth} >Agregar al Carrito</Button>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>




                        <div className="col flipCardEntry">
                            <div className="flip-card-entry-inner shadow ">
                                <div className="flip-card-entry-front-dos">
                                    <img src={logo} alt="Logo" width="32" height="32" className="rounded-circle border border-white my-1" />
                                    <h3 className="mt-3 mb-4 display-6 fw-bold text-dark">Fin de Semana</h3>
                                </div>
                                <div className=' flip-card-entry-back-dos' >
                                    <h4 className='pt-4 mt-3 mb-4 display-6 fw-bold text-dark'>Valor: $ 800</h4>
                                    <h4 className="pt-2 mt-1 mb-4 lh-1 fw-bold text-dark">Sábado y Domingo</h4>
                                    <div className='container overflow-hidden' >
                                        {isAuthenticated
                                            ? <Button type="primary" className="btn-block text-wrap text-center" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: lagarto, id: "entry-weekend", name: "Entrada Fin de Semana", price: 800, cantidad: 1, fecha: date })} >Agregar al Carrito</Button>
                                            : <Button type="primary" className="btn-block text-wrap text-center" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={clickAuth} >Agregar al Carrito</Button>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col flipCardEntry">
                            <div className="flip-card-entry-inner shadow ">
                                <div className="flip-card-entry-front-tres">
                                    <img src={logo} alt="Logo" width="32" height="32" className="rounded-circle border border-white my-1" />
                                    <h3 className="mt-3 mb-4 display-6 fw-bold text-light">Vacaciones</h3>
                                </div>
                                <div className=' flip-card-entry-back-tres' >
                                    <h4 className='pt-4 mt-3 mb-5 display-6 fw-bold text-light'>Valor: $ 900</h4>
                                    {/* <h4 className="pt-2 mt-1 mb-4 display-6 lh-1 fw-bold text-light ">Sábado y Domingo</h4> */}
                                    <div className='container overflow-hidden' >
                                        {isAuthenticated
                                            ? <Button type="primary" className="btn-block text-wrap text-center" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: buho, id: "holidays", name: "Entrada Vacaciones", price: 900, cantidad: 1, fecha: date })} >Agregar al Carrito</Button>
                                            : <Button type="primary" className="btn-block text-wrap text-center" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={clickAuth} >Agregar al Carrito</Button>}
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* <div className="col flipCardEntry">
                        <div className="flip-card-entry-inner shadow">
                            <div className='flip-card-entry-front-tres'>
                                <img src={logo} alt="Logo" width="32" height="32" className="" />
                                <h3 className="">Vacaciones de Verano</h3>
                            </div>
                            <div className='flip-card-entry-back-tres' >
                                <h4 className=''>Valor: $ 900</h4>
                                <h4 className="">Vacaciones</h4>
                                {isAuthenticated ? <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: pata, id: "entry-week", name: "Entrada Semana", price: 500, cantidad: 1, fecha:date })} >Agregar al Carrito</Button> : <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }}  onClick={clickAuth} >Agregar al Carrito</Button>}
                            </div>  
                        </div>
                    </div> */}
                    </div>
                </div>



                {/* 
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/07/Luffy-png.png?fit=800%2C800&ssl=1" alt="Avatar" style={{width:'300px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                            <h1 className='text-light fw-bold'>Luffy</h1>
                            <p className='text-light fw-bold'>Rey de los Piratas</p>
                            <p className='text-light fw-bold'>Hombre de Goma</p>
                        </div>
                    </div>
                </div>  */}



                <div className='btn-ext'>
                    <div className='btn-events'>
                        <Link to='/eventos'>
                            <button type="button" className="btn btn-outline-success btn-secundario">Eventos</button>
                        </Link>

                        <Link to='/exhibits'>
                            <button type="button" className="btn btn-outline-success btn-secundario">Exhibiciones</button>
                        </Link>
                    </div>
                    <br />
                    <div className='back'>
                        <Button type="button" className="btn btn-outline-success btn-secundario" onClick={() => window.history.back()}>
                            <span>Volver Atrás</span>
                        </Button>
                    </div>
                </div>
            </div>

        </main>
    )
}
