import React from 'react'
import {FaCcPaypal} from 'react-icons/fa'

export default function Payment() {
    return (
    <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>Seleccione Medio de Pago</h3>
            <div>
                <FaCcPaypal size={80} color='blue'/>
            </div>
        </div>
    </div>
    )
}
