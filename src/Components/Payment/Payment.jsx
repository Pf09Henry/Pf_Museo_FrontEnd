import React from 'react'
import { FaCcPaypal } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";

export default function Payment() {

    const localStorageCarrito = JSON.parse(localStorage.getItem('CART_V1'))
    let sum = 0;
    if(localStorageCarrito && localStorageCarrito.length > 1){
        localStorageCarrito.forEach((item)=>{
            sum += item.price
        })
    }

    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        
        <div className='container-fluid card d-grid position-relative '>
            <div className='row'>
                <div className=" card text-light col-8 gap-3 ">
                    <h1 className='fs-1 text-dark' >Resumen del pago</h1>
                    {localStorageCarrito.length> 1 ?
                    <div className='container-fluid'>
                        {localStorageCarrito.map((p,i)=>(
                            <div key={i} className="card-body bg-success text-ligth border">
                                <h5>{p.name}: ${p.price}</h5>
                            </div>
                        ))}

                        <div className="card-body bg-light col text-dark mx-auto">
                            <h3 className="card-text fs-3">Total a pagar: $ {sum}</h3>
                        </div>
                    </div>                                        
                    :                       
                    <div>
                        
                    <div key={localStorageCarrito[0].id} className="card-body bg-dark text-ligth border">
                        <h6>{localStorageCarrito[0].name}</h6>
                        <h5>$ {localStorageCarrito[0].price}</h5>
                    </div>
                        <div className="card-body bg-dark text-ligth">
                            <h3 className="card-text fs-3">Total a pagar: {localStorageCarrito[0].price}</h3>
                        </div>
                    </div>        
                    }
                </div>
                <div className='card border-success col'>
                    <h3 className='card-title'>Medio de Pago</h3>
                    <div>
                        <FaCcPaypal className='mt-5' size={100} color='blue' />
                    </div>
                </div>
            </div>            
        </div>)
    )
}
