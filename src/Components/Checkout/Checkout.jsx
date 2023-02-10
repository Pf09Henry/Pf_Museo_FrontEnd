import React from 'react'
//import InformationCheckout from '../informationCheckout/InformationCheckout'

export default function Checkout (){
    return(
        <div>
            <div className='card'>
                <div className='card-body' >
                    <h3 className='card-title'>Lista de Productos</h3>                
                    <div className='card-body'>
                        <img className='card-img-top' src="https://creativekatarsis.com/wp-content/uploads/2017/05/el-concierto-del-ano-en-bilbao-1.jpg" alt="" />
                        <h4 className='card-text' >Item Name</h4>
                        <h5>$100</h5>
                        <a href=' ' className='btn btn-danger' >Eliminar</a>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>Precio Total: $100</h3>
                        <a href='/checkoutInfo' className='btn btn-dark' >Continuar</a>
                    </div>
                </div>
            </div>
            {/* <div>
                <InformationCheckout/>
            </div> */}
        </div>
    )
}
