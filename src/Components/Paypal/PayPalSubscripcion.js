import axios from 'axios';
import React, { useRef, useEffect } from 'react'
// import { CartContext } from '../../Context/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postMail, postSubscription, putSubscription } from '../../Actions/AppActions/appActions';
import Swal from 'sweetalert2';

// import {subs} from "../Membership/data"


export default function PaypalSubscription({name, acount,cupo}) {
    const { user } = useAuth0();
    const usuario = useSelector((state) => state.users)
    const subscription = useSelector((state) => state.subscriptions)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //esto es para detectar el user que hace la compra
    function findUserEmail() {
        let findUser = usuario.filter((e) => e.email === user.email)
        return findUser[0]
    }  


    const paypal = useRef();
    
    let comprobante = []
    let usuarioId = findUserEmail()    
            comprobante.push({
                methodOfPurchase: 'PayPal' || '',
                totalOfPurchase: acount,
                subscriptionId: "",
                userId: usuarioId.id
            }) 


   

    
    
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                /* 
                
                const order = actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: name,
                            amount: {
                                currency_code: "USD",
                                value: acount,
                            }
                        },
                    ]
                })
                
                return order
            },
            onCancel: (data) => {
                Swal.fire({
                    title: 'Upss!',
                    text: 'Pago cancelado',
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#035d03"
                })

                
            },
            onApprove: async (data, actions) => {
                
                const order = await actions.order.capture();
                
                if (order) {                    
                    let data = {
                        email: usuarioId.email,
                        typeSubscription: name,
                        detailSubscription: "hola prueba",
                        cupo: cupo,
                    }
                    
                    for(let i = 0; i< subscription.length; i++){
                        if(subscription[i].email === user.email&& subscription[i].status === true){                            
                            let data = {
                                status: false
                            }
                        dispatch(putSubscription(data, subscription[i].id))
                        }
                    }
                    dispatch(postSubscription(data))                        
                  
                
                    Swal.fire({
                        title: 'Ok',
                        text: 'Tu Pago fue efectuado con Exito',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: "#035d03"
                    })
                        let datosEmail = {
                            mail: user.email,
                            subject: "Pago Paypal",
                            message: "Te has suscripto a " + name
                        }
                        dispatch(postMail(datosEmail))                      
                }
                navigate('/')
                /*      
                //>>aca podemos accionar cualquier lógica necesaria que le indique al user que todo funcionó<<
            },
            onError: (err) => {
                /* 
            }
        })
            .render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}