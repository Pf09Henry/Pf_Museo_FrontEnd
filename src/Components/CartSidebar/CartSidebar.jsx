import React from 'react'
//import { useState } from 'react'
//import { useSelector, /*useDispatch*/ } from 'react-redux'
import './CartSidebar.css'
import { useAuth0 } from "@auth0/auth0-react";
//import { removeToCart } from '../../Actions/AppActions/appActions'


export default function CartSidebar({ saveProducts }) {
    const { isAuthenticated } = useAuth0();


    //const dispatch = useDispatch()

    //const carrito = useSelector(state => state.cart)

    const arrayProducts = JSON.parse(localStorage.getItem('CART_V1'));

    const handleRemoveCart = (e) => {
        const posicionCarrito = arrayProducts.findIndex(pr => pr.id === e.target.value)
        const productos = [...arrayProducts]
        productos.splice(posicionCarrito, 1);

        saveProducts(productos)
    }

    const cleanCart = () => {
        const cartEmpty = []
        saveProducts(cartEmpty)
    }

    let sum = 0;
    if (arrayProducts && arrayProducts.length > 1) {
        arrayProducts.forEach((item) => {
            sum += item.price
        })
    }


    return (
        isAuthenticated && (<div className="offcanvas offcanvas-end" id="cart">
            <div className="offcanvas-header">
                <div className="offcanvas-title container-fluid">
                    <h2 className='text-wrap fw-bold '>Detalle Carrito</h2>
                </div>
                <button className="btn btn-danger" data-bs-dismiss="offcanvas">Cerrar</button>
            </div>

            <div className="offcanvas-body">

                {arrayProducts && arrayProducts.length > 0 ?
                    <div>
                        {arrayProducts.map((product, index) => (
                            <div key={index} className="card rounded">
                                <h3 className='card-title'>{product.name}</h3>
                                <div className="card-body">
                                    <img className='rounded-circle mx-auto img-fluid mb-2' src={product.img} alt="imagenProducto" />
                                    <h4 className='card-text mb-1' >Valor: $ {product.price}</h4>
                                </div>
                                <button value={product.id} className='btn btn-danger' onClick={handleRemoveCart}>Eliminar</button>
                            </div>
                        ))}

                        <div className='mt-2 card bg-dark text-light' >
                            {arrayProducts.length > 1 ?
                                <h4>Total a pagar: $ {sum}</h4>
                                :
                                <h3>Total a pagar: $ {arrayProducts[0].price}</h3>
                            }
                        </div>

                        <div className='d-grid'>
                            <div className='row'>
                                <div className='col' >
                                    <a href="/checkout" className="btn btn-primary">Continuar</a>
                                </div>
                                <div className='col'>
                                    <button onClick={cleanCart} className='btn btn-danger'>Limpiar Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='card-body' >
                        <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                        <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                    </div>
                }

            </div>
        </div>)
    )
}
