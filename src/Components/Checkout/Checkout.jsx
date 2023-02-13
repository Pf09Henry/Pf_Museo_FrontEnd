//import React, { useState } from 'react'
//import { useSelector } from 'react-redux'
//import InformationCheckout from '../informationCheckout/InformationCheckout'
import './Checkout.css'

export default function Checkout (){
        
    
    const localStorageCarrito = JSON.parse(localStorage.getItem('CART_V1'))
    let sum = 0;
    if(localStorageCarrito && localStorageCarrito.length > 1){
        localStorageCarrito.forEach((item)=>{
            sum += item.price
        })
    }

    return(
        <div className='d-grid justify-content-center' >
            
            {localStorageCarrito && localStorageCarrito.length>0 ? 
            <div className="container my-3 row" >
                <h1>Productos Carrito</h1>
                {localStorageCarrito.map((pr) => (
                <div key={pr.id} className='card col cardCheckout '>
                    <div className='card-body'>
                    <img className="img-fluid rounded img-thumbnail" src={pr.img} alt="ImagenEvento" />
                        <h2 className='card-title'>{pr.name}</h2>
                        <h3 className='card-text fs-3 '>Fecha del evento:</h3>
                        <h3 className='card-text fs-3 border'>{pr.startDay}</h3>
                    </div>
                </div>
                ))}                                                                        

                <div className="card bg-dark text-light col-3">
                    <h1>Resumen</h1>
                    {localStorageCarrito.length> 1 ?
                    <div>
                        {localStorageCarrito.map((p,i)=>(
                            <div key={i} className="card-body bg-dark text-ligth border">
                                <h6>{p.name}</h6>
                                <h5>$ {p.price}</h5>
                            </div>
                        ))}

                        <div className="card-body bg-dark text-ligth">
                            <h3 className="card-text fs-3">Total a pagar:</h3>
                            <h3 className="card-text fs-3">$ {sum}</h3>
                        </div>
                    </div>                                        
                    :                       
                    <h3>Total a pagar: $ {localStorageCarrito[0].price}</h3>
                    }
                </div>
                <a href='/checkoutInfo' className='btn btn-success' >Continuar</a>
            </div>
                :
                <div className='card-body' >
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                </div>                
            }
            
            {/* <div>
                <InformationCheckout/>
            </div> */}
        </div>
    )
}
