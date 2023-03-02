import React from 'react'
import { FaCcPaypal } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";
import PayPal from '../Paypal/PayPal';
import { CartContext } from '../../Context';
import {CiMoneyCheck1} from 'react-icons/ci'
import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import './Payment.css'

export default function Payment() {

    const {products} = React.useContext(CartContext)
    
    let sum = 0;
    if (products && products.length > 1) {
        products.forEach((item) => {
            sum += item.price * item.cantidad
        })
    }
    else if(products && products.length === 1){
        sum= products[0].price * products[0].cantidad
    }

    const { isAuthenticated } = useAuth0();
    const ContainerHeight = 250

    return (
        isAuthenticated && (
        
        <div className='container-fluid d-grid position-relative mb-2'>
            <div className='row contenedor-payment'>
                <div className=" card text-light col-8 gap-3 contenedor-check">
                    <h3 className='display lh-1 my-4 pt-3' >Resumen del pago <CiMoneyCheck1/></h3>
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
                        <div className="total-a-pagar-paypal">
                            <h3 className="card-text fs-3 ">Total a pagar: $ {sum.toLocaleString('en-US')}</h3>
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
                </div>      
                    }
                </div>
                <div className='card col contenedor-paypal'>
                    <h3 className='card-title'>Medio de Pago</h3>
                    <div>
                        <FaCcPaypal size={100} color='blue' />
                        <PayPal/>
                    </div>
                </div>
            </div>            
        </div>)
    )
}
