import React from 'react'
import { FaCcPaypal } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";

export default function Payment() {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (<div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>Seleccione Medio de Pago</h3>
                <div>
                    <FaCcPaypal size={80} color='blue' />
                </div>
            </div>
        </div>)
    )
}
