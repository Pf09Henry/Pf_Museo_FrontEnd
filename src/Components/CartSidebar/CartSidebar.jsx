import React from 'react'
import { useSelector } from 'react-redux'
import './CartSidebar.css'

export default function CartSidebar() {

    const carrito = useSelector(state => state.cart)
    
    // const handleRemoveCart = (id)=> {
    // }

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
                carrito.map(product => (
                <div>
                    <div className="card">
                        <h3 className='card-title'>{product[0].name}</h3>
                        <div className="card-body">
                            <img className='rounded-circle mx-auto img-fluid mb-2' src={product[0].img} alt="imagenProducto"/>
                            <h4 className='mt-1' >Valor: $ {product[0].price}</h4>
                        </div>
                    </div>
                    <a href="/checkout" className="btn btn-primary">Continuar</a>
                </div>
                ))
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
