import React from 'react'

export default function Checkout (){
    return(
        <div>
            <div>
                <h3>Lista de Productos</h3>
                <div>
                    <div>
                        <h4>Item Name</h4>
                        <span>$100</span>
                    </div>
                    <button type='button' >Eliminar</button>
                </div>
            </div>
            <div>
                <h3>Precio Total: $100</h3>
                <button type='button' >Continuar</button>
            </div>
        </div>
    )
}
