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



export default function Entradas() {

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
            saveProducts([...products, producto])
        }
    };

    useEffect(() => {
        window.scrollTo(0, 130);
    }, []);


    return (
        <main>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Entradas</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg firstCardEntrys ">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <img src={logo} alt="Logo" width="32" height="32" className="rounded-circle border border-white" />
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Martes a Viernes</h3>
                            </div>
                            <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: pata, id: "entry-week", name: "Entrada Semana", price: 500, cantidad: 1 })} >Agregar al Carrito</Button>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg secondCardEntrys">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <img src={logo} alt="Logo" width="32" height="32" className="rounded-circle border border-white" />
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">Fin de Semana</h3>
                            </div>
                            <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: lagarto, id: "entry-weekend", name: "Entrada Fin de Semana", price: 1000, cantidad: 1 })} >Agregar al Carrito</Button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg thirdCardEntrys">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <img src={logo} alt="Logo" width="32" height="32" className="rounded-circle border border-white" />
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Vacaciones de Verano</h3>
                            </div>
                            <Button type="primary" style={{ backgroundColor: "rgb(56, 102, 103" }} onClick={() => handleAddToCart({ img: buho, id: "entry-vacations", name: "Entrada Vacaciones", price: 800, cantidad: 1 })} >Agregar al Carrito</Button>
                        </div>
                    </div>
                </div>
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
