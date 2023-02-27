import React from 'react'
//import { useState } from 'react'
//import { useSelector, /*useDispatch*/ } from 'react-redux'
import './CartSidebar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from '../../Context';
//import { removeToCart } from '../../Actions/AppActions/appActions'
import { GiAmmoniteFossil } from 'react-icons/gi'

export default function CartSidebar() {
    const { products, saveProducts } = React.useContext(CartContext)
    const { isAuthenticated } = useAuth0();

    const handleAddTickets = (e) => {
        const posicionCarrito = products.findIndex(pr => pr.id === e.target.value)
        const productos = [...products]
        productos[posicionCarrito].cantidad++
        saveProducts(productos)
    }

    const handleRemoveTickets = (e) => {
        const posicionCarrito = products.findIndex(pr => pr.id === e.target.value)
        const productos = [...products]
        if (productos[posicionCarrito].cantidad <= 1) {
            productos.splice(posicionCarrito, 1);
            saveProducts(productos)
        } else {
            productos[posicionCarrito].cantidad--
            saveProducts(productos)
        }
    }

    const cleanCart = () => {
        const cartEmpty = []
        saveProducts(cartEmpty)
    }

    let sum = 0;
    if (products && products.length > 1) {
        products.forEach((item) => {
            sum += item.price * item.cantidad
        })
    }


    return (
        isAuthenticated && (<div className="offcanvas offcanvas-end" id="cart">
            <div className="offcanvas-header d-grid">
                <div className='row'>
                    <div className="offcanvas-title container-fluid col-11 ">
                        <h2 className='text-wrap fw-bold '><GiAmmoniteFossil /> Detalle Carrito</h2>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-danger" data-bs-dismiss="offcanvas">X</button>
                    </div>
                </div>
            </div>

            <div className="products">

                {products && products.length > 0 ?
                    <div className=''>
                        <div className='card mt-4'>
                            {products.map((product, index) => (
                                <div className='card cardCart' key={product.id}>
                                    <div>
                                        <h5><strong>{product.name}</strong></h5>
                                    </div>
                                    <img src={product.img} alt={`picFrom${product.name}`} />

                                    <div className='d-grid card bg-success text-dark aling-items-center resumen' >
                                        <div className='row'>
                                            <div className='col-7' >
                                                <h3><strong> Valor ${(product.price * product.cantidad).toLocaleString('en-US')} </strong></h3>
                                            </div>
                                            <div className='col-5 d-flex gap-1'>
                                                <button value={product.id}
                                                    className='btn bg-light btnRm ' /*badge rounded-pill border border-danger bg-danger  top-0 end-0 position-absolute*/
                                                    onClick={handleRemoveTickets}>-</button>
                                                <span className='cantidad fs-4'>{product.cantidad}</span>
                                                <button value={product.id}
                                                    className='btn bg-light btnAdd ' /*badge rounded-pill border border-danger bg-danger  top-0 end-0 position-absolute*/
                                                    onClick={handleAddTickets}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className='d-grid mt-2'>
                            <div className=''>
                                <div className='' >
                                    {products.length > 1 ?
                                        <h1 className='Total '>Total: <sub>$</sub> {sum.toLocaleString('en-US')}</h1>
                                        :
                                        <h1 className='Total'>Total: <sub>$</sub>{(products[0].price * products[0].cantidad).toLocaleString('en-US')}</h1>
                                        //original
                                        // <a href="/checkout"><h1 className='btn btn-primary col fs-4 btnTotal '>Total: <sub>$</sub> {sum.toLocaleString('en-US')}</h1></a>
                                        // :                       
                                        // <a href="/checkout"><h1 className='btn btn-primary col fs-4 btnTotal'>Total: <sub>$</sub>{(products[0].price*products[0].cantidad).toLocaleString('en-US')}</h1></a>
                                    }
                                </div>
                                <div className=''>

                                    <a href='/checkout' type="button" className="btn btn-outline-success btn-secundario">Finalizar Compra</a>

                                    {/* <a href="/checkout"><h1 className='btn btn-primary col fs-4 btnTotal '>Finalizar Compra</h1></a> */}

                                    <button onClick={cleanCart} type="button" className='btn btn-danger btnCleanCart'>Limpiar Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :

                    <div className='card-body' >
                        <img className='img-fluid mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                        <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                    </div>
                }

            </div>
        </div>)
    )
}
