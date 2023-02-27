import React from 'react'
//import { useSelector } from 'react-redux'
//import InformationCheckout from '../informationCheckout/InformationCheckout'
import { CartContext } from '../../Context';
import './Checkout.css'
import {TiShoppingCart} from 'react-icons/ti'

export default function Checkout (){

    const {products, saveProducts} = React.useContext(CartContext)
    
    let sum = 0;
    if (products && products.length > 1) {
        products.forEach((item) => {
            sum += item.price * item.cantidad
        })
    }
    else if(products && products.length === 1){
        sum= products[0].price * products[0].cantidad
    }

    const handleRemoveCart = (e) => {
        const posicionCarrito = products.findIndex(pr => pr.id === e.target.value)
        const productos = [...products]
        productos.splice(posicionCarrito,1);
        
        saveProducts(productos)
    }

    return(
        <div className='d-grid' >
            
            {products && products.length>0 ? 

            <div className="container my-4" >
                <div className='row w-100' >
                    <h1 className="display-3 fw-bold lh-1 mb-4">Carrito <TiShoppingCart/></h1>
                </div>
                <div className='row justify-content-center '>
                    {products.map((pr) => (                    
                        <div key={pr.id} className='cardCheckout position-relative shadow'>                            
                                <h3 className='card-header text-success rounded-5'>{pr.name}</h3>
                                <img className="" src={pr.img} alt="Imagenproducto" />
                                <h4>Tickets: {pr.cantidad}</h4>
                                <button value={pr.id} 
                                        className='badge rounded-pill border border-danger bg-danger top-0 end-0 position-absolute' 
                                        onClick={handleRemoveCart}>X</button>                            
                        </div>
                    ))}
                </div>                                                                        

                <div className="container-fluid text-dark gap-3 ">
                    <h1 className='fs-1' >Resumen</h1>
                    {products.length> 1 ?
                    <div className='container-fluid d-grid'>
                        {products.map((p,i)=>(
                            <div key={i} className="card-body text-dark border row w-100 shadow ">
                                <div className='col'>
                                    <h5>{p.name}</h5>
                                    <h5>Tickets: {p.cantidad}</h5>
                                </div>
                                <div className='col'>
                                    <h5>Valor Unitario</h5>
                                    <h5>$ {(p.price).toLocaleString('en-US')}</h5>
                                </div>
                                <div className='col'>
                                    <h5>Valor</h5>
                                    <h5>$ {(p.price * p.cantidad).toLocaleString('en-US')}</h5>
                                </div>
                            </div>
                        ))}

                        <div className="container-fluid bg-dark text-light d-grid mt-4 totalP ">
                            <div className='row'>
                                <div className='col-6'>
                                    <h3 className="card-text fs-2 col">Total a pagar:</h3>
                                </div>
                                <div className='col-6'>
                                    <h3 className="card-text fs-2 col">$ {sum.toLocaleString('en-US')}</h3>
                                </div>
                            </div>
                        </div>
                    </div>                                        
                    :
                    <div className='container-fluid d-grid'>         
                        <div key={products[0].id} className="card-body text-dark border row w-100 shadow ">
                            <div className='col'>
                                <h5>{products[0].name}</h5>
                                <h5>Tickets: {products[0].cantidad}</h5>
                            </div>
                            <div className='col'>
                                <h5>Valor Unitario</h5>
                                <h5>$ {(products[0].price).toLocaleString('en-US')}</h5>
                            </div>
                            <div className='col'>
                                <h5>Valor</h5>
                                <h5>$ {(products[0].price * products[0].cantidad).toLocaleString('en-US')}</h5>
                            </div>
                        </div>
                        <div className="container-fluid bg-dark text-light d-grid mt-4 totalP ">
                            <div className='row'>
                                <div className='col-6'>
                                    <h3 className="card-text fs-2 col">Total a pagar:</h3>
                                </div>
                                <div className='col-6'>
                                    <h3 className="card-text fs-2 col">$ {sum.toLocaleString('en-US')}</h3>
                                </div>
                            </div>
                        </div>     
                    </div>           
                    }
                </div>
                <div>
                    <a href='/payment' className='btn btn-success mt-3 btnCheck' >Continuar</a>
                </div>
            </div>
                :
                <div className='card-body d-flex-column gap-3' >
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                    <div className="dropdown-menu dropdown-menu-dark d-block position-static border-0 pt-0 mx-0 rounded-3 shadow overflow-hidden">
                        <ul className="list-unstyled mb-0">
                        <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/eventos">
                            <span className="d-inline-block bg-success rounded-circle p-1"></span>
                            Eventos
                        </a></li>
                        <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/entradas">
                            <span className="d-inline-block bg-primary rounded-circle p-1"></span>
                            Entradas
                        </a></li>
                        <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="/socios">
                            <span className="d-inline-block bg-danger rounded-circle p-1"></span>
                            Membresias
                        </a></li>
                        </ul>
                    </div>

                </div>                
            }
        </div>
    )
}
