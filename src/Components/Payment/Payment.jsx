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

export default function Payment() {

    const {products} = React.useContext(CartContext)
    const { isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch()
    const subscription = useSelector((state) => state.subscriptions);
    const [cantidad, SetCantidad] = useState()
    //const [descuento, setDescuento] = useState()

    useEffect(()=>{
        dispatch(getSubscription())
    },[dispatch])

    let cupoSubs;

    if(isAuthenticated){
        for(let i = 0; i<subscription.length; i++){
            if(subscription[i].email === user.email){
                cupoSubs = subscription[i].cupo
            }
        }
    }

    var desc = 0;
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

    console.log(cantidad)

    function selctOption(cupoSubs){
        if(cupoSubs === 1){
            return (<>

                <select onChange={(e) => handleChange(e)}>
                    <option value={0}>Seleccionar cantidad</option>
                    <option value={1}>1</option>
                </select>
            </>)
        }else if(cupoSubs === 2){
            return (<>
                <select onChange={(e) => handleChange(e)}>
                <option value={0}>Seleccionar cantidad</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
            </>)
        }
    }


    function agregarDescuento(sum){
        console.log(sum)
        if(cantidad === "1"){
            console.log("entro")
            desc = sum * 15 / 100 
        } else if(cantidad === "2"){
            console.log("entro")
            desc = sum * 25 / 100 
        }
    }

    

    return (
        isAuthenticated && (
        
        <div className='container-fluid d-grid position-relative mb-2'>
            <div className='row'>
                <div className=" card text-light col-8 border-success gap-3 ">
                    <h1 className='display-5 lh-1 my-4 text-dark' >Resumen del pago <CiMoneyCheck1/></h1>
                    {
                        cupoSubs === 0 ? null : 
                    <div>
                        <h4>Usted tiene {cupoSubs} descuento por suscripcion</h4> 
                        {
                            selctOption(cupoSubs)
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
                        height={ContainerHeight}
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
                            <h3 className="card-text fs-3 text-light">Total a pagar: $ {(sum - desc).toLocaleString('en-US')}</h3>
                        </div>

                    </div>
                    :                       
                    <div>       
                    <div key={products[0].id} className="card-body bg-light rounded-4 text-success border">
                        <h3 className='text-success' >{`${products[0].name}: $ ${(products[0].price * products[0].cantidad).toLocaleString('en-US')}`}</h3>
                    </div>
                        <div className="card-body bg-success rounded-5 text-light my-2">
                            <h3 className="card-text fs-3 text-light">Total a pagar: $ {(sum - desc).toLocaleString('en-US')}</h3>
                        </div>
                    </div>        
                    }
                </div>
                <div className='card border-success col'>
                    <h3 className='card-title'>Medio de Pago</h3>
                    <div>
                        <FaCcPaypal className='mt-5' size={100} color='blue' />
                        <PayPal desc = {desc}/>
                    </div>
                </div>
            </div>            
        </div>)
    )
}
