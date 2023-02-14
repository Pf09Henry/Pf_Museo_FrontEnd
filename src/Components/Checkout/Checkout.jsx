//import React, { useState } from 'react'
//import { useSelector } from 'react-redux'
//import InformationCheckout from '../informationCheckout/InformationCheckout'
import './Checkout.css'

export default function Checkout ({saveProducts}){

    const localStorageCarrito = JSON.parse(localStorage.getItem('CART_V1'))
    let sum = 0;
    if(localStorageCarrito && localStorageCarrito.length > 1){
        localStorageCarrito.forEach((item)=>{
            sum += item.price
        })
    }

    const handleRemoveCart = (e) => {
        const posicionCarrito = localStorageCarrito.findIndex(pr => pr.id === e.target.value)
        const productos = [...localStorageCarrito]
        productos.splice(posicionCarrito,1);
        
        saveProducts(productos)
    }

    return(
        <div className='d-grid justify-content-center' >
            
            {localStorageCarrito && localStorageCarrito.length>0 ? 
            <div className="container my-3 row" >
                <h1>Productos Carrito</h1>
                {localStorageCarrito.map((pr) => (
                <div key={pr.id} className='card border-success col cardCheckout '>
                    <div className='position-relative'>
                        <h2 className='card-header text-success'>{pr.name}</h2>
                        <img className="img-fluid rounded img-thumbnail p-2" src={pr.img} alt="ImagenEvento" />
                        <h3 className='card-text fs-3 '>Fecha del evento:</h3>
                        <h3 className='card-text fs-3 border'>{pr.startDay}</h3>
                        <button value={pr.id} 
                                className='badge rounded-pill border border-danger bg-danger top-0 end-0 position-absolute' 
                                onClick={handleRemoveCart}>X</button>
                    </div>
                </div>
                ))}                                                                        

                <div className="container-fluid card bg-dark text-light col-3 gap-3 ">
                    <h1 className='fs-1' >Resumen</h1>
                    {localStorageCarrito.length> 1 ?
                    <div className='container-fluid'>
                        {localStorageCarrito.map((p,i)=>(
                            <div key={i} className="card-body bg-dark text-ligth border">
                                <h6>{p.name}</h6>
                                <h5>$ {p.price}</h5>
                            </div>
                        ))}

                        <div className="card-body bg-dark text-ligth mx-auto">
                            <h3 className="card-text fs-3">Total a pagar:</h3>
                            <h3 className="card-text fs-3">$ {sum}</h3>
                        </div>
                    </div>                                        
                    :                       
                    <div>
                        
                    <div key={localStorageCarrito[0].id} className="card-body bg-dark text-ligth border">
                        <h6>{localStorageCarrito[0].name}</h6>
                        <h5>$ {localStorageCarrito[0].price}</h5>
                    </div>
                        <div className="card-body bg-dark text-ligth">
                            <h3 className="card-text fs-3">Total a pagar:</h3>
                            <h3 className="card-text fs-3">$ {localStorageCarrito[0].price}</h3>
                        </div>
                    </div>        
                    }
                </div>
                <div>
                    <a href='/checkoutInfo' className='btn btn-success' >Continuar</a>
                </div>
            </div>
                :
                <div className='card-body d-flex-column gap-3' >
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <a href='/eventos' className='btn btn-primary bg-succes'>Ver Eventos</a>
                </div>                
            }
            
            {/* <div>
                <InformationCheckout/>
            </div> */}
        </div>
    )
}
