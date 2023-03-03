import React, { useEffect, useState } from 'react'
import { FaCcPaypal } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";
import PayPal from '../Paypal/PayPal';
import { CartContext } from '../../Context';
import {CiMoneyCheck1} from 'react-icons/ci'
import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';

import { getSubscription } from '../../Actions/AppActions/appActions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import './Payment.css'


export default function Payment() {

    const {products} = React.useContext(CartContext)
    const { isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch()
    const subscription = useSelector((state) => state.subscriptions);
    const [cantidad, SetCantidad] = useState()
    let setDeisabled = false
    const [click, setClick] = useState(false)
    let disableClick = false

    useEffect(()=>{
        dispatch(getSubscription())
    },[dispatch])

    var desc = 0;

    let typeSubs;
   /*  console.log(subscription) */
    if(isAuthenticated){
        for(let i = 0; i<subscription.length; i++){
      /*       console.log(subscription[i].status) */
            if(subscription[i].email === user.email && subscription[i].status === true){
                typeSubs = subscription[i].typeSubscription
            }
        } 
    }
    
    var sum = 0;
    if (products && products.length > 1) {
        products.forEach((item) => {
            sum += item.price * item.cantidad
        })
    }
    
    else if(products && products.length === 1){
        sum= products[0].price * products[0].cantidad
    }

    const ContainerHeight = 250

    const handleChange = (e) => {
        SetCantidad(e.target.value)
    }

    /* console.log(typeSubs) */

    function selctOption(typeSubs , setDeisabled){
/*         console.log(typeSubs , setDeisabled) */
        if(typeSubs === "Socio-Eco"){
            return (<>
                <select onChange={(e) => handleChange(e)} disabled={setDeisabled}>
                    <option value={5}>Selecciona una opcion</option>
                    <option value={2}>si</option>
                    <option value={1}>No</option>
                </select>
            </>)
        }else if(typeSubs === "Socio-Basic"){
            return (<>
                <select onChange={(e) => handleChange(e)} disabled={setDeisabled}>
                    <option value={5}>Selecciona una opcion</option>
                    <option value={4}>si</option>
                    <option value={1}>No</option>
                </select>
            </>)
        }
        else if(typeSubs === "Socio-Paleo"){
            return (<>
                <select onChange={(e) => handleChange(e)} disabled={setDeisabled}>
                <option value={5}>Seleccionar una opcion</option>
                    <option value={3}>Si</option>
                    <option value={1}>No</option>
                </select>
            </>)
        }
    }
    
    

  /*   console.log(cantidad) */

    function agregarDescuento(sum){
     /*    console.log(sum) */
        if(cantidad === "2"){
            /* console.log("entro") */
            desc = sum * 10 / 100 
        } else if(cantidad === "3"){
          /*   console.log("entro") */
            desc = sum * 15 / 100 
        }else if(cantidad === "4"){
          /*   console.log("entro") */
            desc = sum * 5 / 100 
        }
        else if(cantidad === "1"){
       /*      console.log("entro") */
            desc = 0
        }
    }
  /*   console.log(cantidad) */
    function handleClick(e){
        if(cantidad === undefined){
            /* console.log("alla") */
            SetCantidad(9)
        }
        setClick(true)
        disableClick = true
    }
  /*   console.log(click)
    console.log(typeSubs)
    console.log(cantidad) */
    
    
    return (
        isAuthenticated && (
        
        <div className='container-fluid d-grid position-relative mb-2'>

            <div className='row contenedor-payment'>
                <div className=" card text-light col-8 gap-3 contenedor-check">
                    <h3 className='display lh-1 my-4 pt-3' >Resumen del pago <CiMoneyCheck1/></h3>
                    {
                        typeSubs === undefined ? null : 
                    <div>
                        <h4>Usted tiene una Suscripcion de {typeSubs}</h4> 
                        <p>¿Desea ocupar el descuento por socio?</p>
                        {
                            cantidad === undefined ? selctOption(typeSubs) : setDeisabled = true 
                        }
                        <br />
                        <h4 onClick={agregarDescuento(sum)}></h4>
                    </div>
                    }

            
                
                    

                    {products.length> 1 ?
                    <div>
                        <List>
                        <VirtualList
                        data={products}
                        /* height={ContainerHeight} */
                        itemHeight={10}
                        itemKey="id"
                        //onScroll={onScroll}
                        >
                        {(item) => (
                            <List.Item key={item.email}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.img} />}
                                title={item.name}
                            />
                            <div>{`$ ${(item.price * item.cantidad).toLocaleString('en-US')}`}</div>
                            </List.Item>
                            )}
                            </VirtualList>
                        </List>

                        <div className="card-body bg-success rounded-5 text-light my-2">
                            <h3 className="card-text fs-3 text-light">Total a pagar: $ {(cantidad === 1 || cantidad === 9 ? sum : sum - desc).toLocaleString('en-US')}</h3>

                        </div>

                    </div>
                    :                       
                    <div>
                    <List>
                    <VirtualList
                    data={products}
                    /* height={ContainerHeight} */
                    itemHeight={10}
                    itemKey="id"
                    //onScroll={onScroll}
                    >
                    {(item) => (
                        <List.Item key={item.email}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.img} />}
                            title={item.name}
                        />
                        <div>{`$ ${(item.price * item.cantidad).toLocaleString('en-US')}`}</div>
                        </List.Item>
                        )}
                        </VirtualList>
                    </List>
                    <div className="total-a-pagar-paypal">
                        <h3 className="card-text fs-3 ">Total a pagar: $ {sum.toLocaleString('en-US')}</h3>
                    </div>

                        <div className="card-body bg-success rounded-5 text-light my-2">
                            <h3 className="card-text fs-3 text-light">Total a pagar: $ {(cantidad === 1 || cantidad === 9 ? sum : sum - desc).toLocaleString('en-US')}</h3>
                        </div>
                    </div>        

                    }
                </div>
                <div className='card col contenedor-paypal'>
                    <h3 className='card-title'>Medio de Pago</h3>

                    <button className="card-text fs-3" onClick={(e)=>handleClick(e)} disabled={click}>GENERAR ORDEN</button>
                        {
                            click === true ? <div>
                            <FaCcPaypal className='mt-5' size={100} color='blue' />
                            <PayPal desc = {desc} cantidad={cantidad} />
                            </div> : null
                        }

                    

                </div>
            </div>            
        </div>)
    )
}
