import React from 'react'
//import { useSelector } from 'react-redux'
//import InformationCheckout from '../informationCheckout/InformationCheckout'
import { CartContext } from '../../Context';
import './Checkout.css'

export default function Checkout (){

    const {products, saveProducts} = React.useContext(CartContext)
    
    let sum = 0;
    if (products && products.length > 1) {
        products.forEach((item) => {
            sum += item.price * item.cantidad
        })
    }
    else if(products && products.length === 1){
        sum= products[0].totalPrice
    }

    const handleRemoveCart = (e) => {
        const posicionCarrito = products.findIndex(pr => pr.id === e.target.value)
        const productos = [...products]
        productos.splice(posicionCarrito,1);
        
        saveProducts(productos)
    }

    return(
        <div className='d-grid justify-content-center' >
            
            {products && products.length>0 ? 
            <div className="container my-3 row position-relative z-index-1" >
                <h1>Productos Carrito</h1>
                {products.map((pr) => (
                <div key={pr.id} className='card border-success col cardCheckout '>
                    <div className='position-relative'>
                        <h2 className='card-header text-success'>{pr.name}</h2>
                        <img className="img-fluid rounded img-thumbnail p-2" src={pr.img} alt="ImagenEvento" />

                        <button value={pr.id} 
                                className='badge rounded-pill border border-danger bg-danger top-0 end-0 position-absolute' 
                                onClick={handleRemoveCart}>X</button>
                    </div>
                </div>
                ))}                                                                        

                <div className="container-fluid card bg-dark text-light col-3 gap-3 ">
                    <h1 className='fs-1' >Resumen</h1>
                    {products.length> 1 ?
                    <div className='container-fluid'>
                        {products.map((p,i)=>(
                            <div key={i} className="card-body bg-dark text-ligth border">
                                <h6>{p.name}</h6>
                                <h5>Tickets: {p.cantidad.toLocaleString('en-US')}</h5>
                                <h5>$ {(p.price * p.cantidad).toLocaleString('en-US')}</h5>
                            </div>
                        ))}

                        <div className="card-body bg-dark text-ligth mx-auto">
                            <h3 className="card-text fs-3">Total a pagar:</h3>
                            <h3 className="card-text fs-3">$ {sum.toLocaleString('en-US')}</h3>
                        </div>
                    </div>                                        
                    :                       
                    <div>
                        
                    <div key={products[0].id} className="card-body bg-dark text-ligth border">
                        <h6>{products[0].name}</h6>
                        <h5>$ {(products[0].price * products[0].cantidad).toLocaleString('en-US') }</h5>
                    </div>
                        <div className="card-body bg-dark text-ligth">
                            <h3 className="card-text fs-3">Total a pagar:</h3>
                            <h3 className="card-text fs-3">$ {sum.toLocaleString('en-US')}</h3>
                        </div>
                    </div>        
                    }
                </div>
                <div>
                    <a href='/payment' className='btn btn-success' >Continuar</a>
                </div>
            </div>
                :
                <div className='card-body d-flex-column gap-3' >
                    <h3 className='badge bg-dark text-wrap fw-bold fs-4 mt-4' >No hay productos agregados al carrito de compras</h3>
                    <img className='img-fluid rounded-circle mx-auto' src="https://img.freepik.com/premium-vector/cute-baby-triceratops-cartoon-character-animal-dino-isolated_138676-3160.jpg" alt="sad" />
                    <a href='/eventos' className='btn btn-primary bg-succes'>Ver Eventos</a>
                </div>                
            }
        </div>
    )
}
