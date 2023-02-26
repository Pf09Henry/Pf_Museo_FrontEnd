import React from 'react'
import { FaCcPaypal } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";
import PayPal from '../Paypal/PayPal';
import { CartContext } from '../../Context';
import {CiMoneyCheck1} from 'react-icons/ci'

export default function Payment() {

    const {products} = React.useContext(CartContext)
    
    let sum = 0;
    if (products && products.length > 1) {
        products.forEach((item) => {
            sum += item.price * item.cantidad
        })
    }
    else if(products && products.length === 1){
        sum= products[0].totalPrice
    }

    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        
        <div className='container-fluid d-grid position-relative mb-2'>
            <div className='row'>
                <div className=" card text-light col-8 border-success gap-3 ">
                    <h1 className='display-3 fw-bold lh-1 mb-4 text-dark' >Resumen del pago <CiMoneyCheck1/></h1>
                    {products.length> 1 ?
                    <div className='container-fluid'>
                        {products.map((p,i)=>(
                            <div key={i} className="card-body bg-secodary text-success border">
                                <h5>{p.name}: ${(p.price * p.cantidad).toLocaleString('en-US')}</h5>
                            </div>
                        ))}

                        <div className="card-body bg-dark col text-light mx-auto">
                            <h3 className="card-text fs-3">Total a pagar: $ {sum.toLocaleString('en-US')}</h3>
                        </div>
                    </div>                                        
                    :                       
                    <div>
                        
                    <div key={products[0].id} className="card-body bg-secodary text-success border">
                        <h6>{products[0].name}</h6>
                        <h5>$ {(products[0].price * products[0].cantidad).toLocaleString('en-US')}</h5>
                    </div>
                        <div className="card-body bg-dark text-ligth">
                            <h3 className="card-text fs-3">Total a pagar: {(products[0].price * products[0].cantidad).toLocaleString('en-US')}</h3>
                        </div>
                    </div>        
                    }
                </div>
                <div className='card border-success col'>
                    <h3 className='card-title'>Medio de Pago</h3>
                    <div>
                        <FaCcPaypal className='mt-5' size={100} color='blue' />
                        <PayPal/>
                    </div>
                </div>
            </div>            
        </div>)
    )
}
