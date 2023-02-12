import React from 'react'
//import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './CartSidebar.css'
import { removeToCart } from '../../Actions/AppActions/appActions'


export default function CartSidebar() {

    const dispatch = useDispatch()

    const carrito = useSelector(state => state.cart)

    const localStorageCarrito = localStorage.getItem('CART_V1',);
    let parsedCarrito;
    
    if(!localStorageCarrito){
        localStorage.setItem('CART_V1', JSON.stringify([]));
        parsedCarrito = [];
    } else{
        parsedCarrito = JSON.parse(localStorageCarrito);
    }
    
    //const carrito = useSelector(state => state.cart)
    // const [products, setProducts] = useState(parsedCarrito)
    
    // const handleRemoveCart = (id)=> {
    // }

    const handleRemoveCart = (e) => {
        dispatch(removeToCart(e.target.value))        
    }

    return (
        <div className="offcanvas offcanvas-end" id="cart">
            <div className="offcanvas-header">
                <div className="offcanvas-title container-fluid">
                    <h2 className='text-wrap fw-bold '>Detalle Carrito</h2>
                </div>
                <button className="btn btn-danger" data-bs-dismiss="offcanvas">Cerrar</button>
            </div>

            <div className="offcanvas-body">
                {carrito && carrito.length >0  ?
                <div>
                    {carrito.map((product,index) => (                
                    <div key={index} className="card">
                        <h3 className='card-title'>{product.name}</h3>
                        <div className="card-body">
                            <img className='rounded-circle mx-auto img-fluid mb-2' src={product.img} alt="imagenProducto"/>
                            <h4 className='mt-1' >Valor: $ {product.price}</h4>
                        </div>
                        <button value={product.id} className='btn btn-danger' onClick={handleRemoveCart}>Eliminar</button>
                    </div>                
                    ))}
                    <a href="/checkout" className="btn btn-primary">Continuar con la compra</a>
                </div>                 
                :
                <div className='card-body' >
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                </div>
                }
            </div>        
        </div>
    )
}
