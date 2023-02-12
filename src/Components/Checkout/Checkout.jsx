import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//import InformationCheckout from '../informationCheckout/InformationCheckout'

export default function Checkout (){
        
    
    const localStorageCarrito = localStorage.getItem('CART_V1',);
    let parsedCarrito;
    
    if(!localStorageCarrito){
        localStorage.setItem('CART_V1', JSON.stringify([]));
        parsedCarrito = [];
    } else{
        parsedCarrito = JSON.parse(localStorageCarrito);
    }
    
    //const carrito = useSelector(state => state.cart)
    const [products, setProducts] = useState(parsedCarrito)

    return(
        <div>
            <h1>Productos Carrito</h1>
            {/* {carrito && carrito.length>0 ? 
            <div>
                <div className='card-body' >
                    <h3 className='card-title'>Lista de Productos</h3>                
                    <div className='card-body'>
                        <img className='card-img-top' src="https://creativekatarsis.com/wp-content/uploads/2017/05/el-concierto-del-ano-en-bilbao-1.jpg" alt="" />
                        <h4 className='card-text'>Item Name</h4>
                        <h5>$100</h5>
                        <a href=' ' className='btn btn-danger' >Eliminar</a>
                    </div>
                    
                </div>
                <a href='/checkoutInfo' className='btn btn-dark' >Continuar</a>
            </div>
                :
                <div className='card-body' >
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                </div>                
            } */}

            {products && products.length>0 ? 
            <div>
                <div className='card'>
                    <h3 className='card-title'>Lista de Productos</h3>                
                        {products.map(pr => (
                            <div className='card'>
                                <div className='card-body'>
                                    <h2 className='card-title'>{pr.name}</h2>
                                </div>
                            </div>
                        ))}                                                                        
                </div>
                <a href='/checkoutInfo' className='btn btn-dark' >Continuar</a>
            </div>
                :
                <div className='card-body' >
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                </div>                
            }

                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>Precio Total: $ 0 </h3>
                    </div>
                </div>
            
            {/* <div>
                <InformationCheckout/>
            </div> */}
        </div>
    )
}
