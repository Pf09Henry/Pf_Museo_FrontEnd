// import axios from 'axios';
import React, { useRef, useEffect, useContext } from 'react'
import { CartContext } from '../../Context/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postTicket, putEvent, postMail, getSubscription } from '../../Actions/AppActions/appActions';
import Swal from 'sweetalert2';



export default function Paypal({desc, cantidad}) {
    const { user } = useAuth0();
    const usuario = useSelector((state) => state.users)
    const eventos = useSelector((state) => state.eventos)
    const subscripcion = useSelector((state)=> state.subscriptions)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, saveProducts } = useContext(CartContext);

    //esto es para detectar el user que hace la compra
    function findUserID(name) {
        let findUser = usuario.filter((e) => e.name === user.name)
        return findUser[0].id
    }

    if(products && desc){
        
    }

    

    let info = [];
    let acount = [];
    let amount = [];
    let idEvent = [];
    // recopila info del carrito 

    var total = 0

    for (let i = 0; i < products.length; i++) {
        info.push(products[i].name)
        acount.push(products[i].price)
        amount.push(products[i].cantidad)
        idEvent.push(products[i].id)
        total = total + (acount[i] * amount[i])
    }

    // 
    //     if(desc != 0){
    //         
    //         
    //         total = total - desc
    //         
    //     }
    


    const paypal = useRef();
    let ticket = []
    for (let i = 0; i < products.length; i++) {
        ticket.push({
            methodOfPurchase: 'PayPal' || '',
            amount: parseInt(amount[i]) || '',
            totalOfPurchase: acount[i] * amount[i],
            eventId: idEvent[i] || '',
            userId: findUserID(user.name) || '',
        })
    }

   


    function findEventCupos(id) {
        let findEvent = eventos.filter((e) => e.id === id)

        return (findEvent[0].availability)

    }
    //  function findSubsCupos(id){        
    //     for (let i = 0; i < subscripcion.length; i++) {
    //         if (subscripcion[i].email === user.email && subscripcion[i].status === true) {
    //            if(subscripcion[i].cupo > 0){
    //             let cupoMayor = true
    //            }                
    //         } 
    //     }
    //  }

    
    
    
    useEffect(() => {
        
        
        if(cantidad  > 1 && cantidad < 5){
            
            window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                   
                    const order = actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: info.join(" - "),
                                amount: {
                                    currency_code: "USD",
                                    value: total - desc
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
                        Swal.fire({
                            title: 'Ok',
                            text: 'Tu Pago fue efectuado con Exito',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            confirmButtonColor: "#035d03"
                        })
                        
                        navigate("/eventos")
                        saveProducts([])
    
                        for (let i = 0; i < ticket.length; i++) {
                            let cupos = findEventCupos(idEvent[i]) - parseInt(amount[i])
                            const putEvento = {
                                availability: cupos,
                            }
    
                            
                            
                            let datosEmail = {
                                mail: user.email,
                                subject: "Pago Paypal",
                                message: "Su compra fue concretada de manera exitosa!",
                                ticket: ticket[i],
                                event: info[i]
                            }
                            dispatch(postTicket(ticket[i]))
                            dispatch(putEvent(putEvento, idEvent[i]))
                            dispatch(postMail(datosEmail))
                           
                        }
                    }
                    //>>aca podemos accionar cualquier lógica necesaria que le indique al user que todo funcionó<<
                },
                onError: (err) => {
                    
                }
            })
                .render(paypal.current)
        }

        else if(cantidad  === "1"){
            
            window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                   
                    const order = actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: info.join(" - "),
                                amount: {
                                    currency_code: "USD",
                                    value: total
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
                        Swal.fire({
                            title: 'Ok',
                            text: 'Tu Pago fue efectuado con Exito',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            confirmButtonColor: "#035d03"
                        })
                        
                        navigate("/eventos")
                        saveProducts([])
    
                        for (let i = 0; i < ticket.length; i++) {
                            let cupos = findEventCupos(idEvent[i]) - parseInt(amount[i])
                            const putEvento = {
                                availability: cupos,
                            }
    
                            
                            
                            let datosEmail = {
                                mail: user.email,
                                subject: "Pago Paypal",
                                message: "Su compra fue concretada de manera exitosa!",
                                ticket: ticket[i],
                                event: info[i]
                            }
                            dispatch(postTicket(ticket[i]))
                            dispatch(putEvent(putEvento, idEvent[i]))
                            dispatch(postMail(datosEmail))
                           
                        }
                    }
                    //>>aca podemos accionar cualquier lógica necesaria que le indique al user que todo funcionó<<
                },
                onError: (err) => {
                    
                }
            })
                .render(paypal.current)
        }

        else if(cantidad  === 9 ){
            
            window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                   
                    const order = actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: info.join(" - "),
                                amount: {
                                    currency_code: "USD",
                                    value: total
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
                        Swal.fire({
                            title: 'Ok',
                            text: 'Tu Pago fue efectuado con Exito',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            confirmButtonColor: "#035d03"
                        })
                        
                        navigate("/eventos")
                        saveProducts([])
    
                        for (let i = 0; i < ticket.length; i++) {
                            let cupos = findEventCupos(idEvent[i]) - parseInt(amount[i])
                            const putEvento = {
                                availability: cupos,
                            }
    
                            
                            
                            let datosEmail = {
                                mail: user.email,
                                subject: "Pago Paypal",
                                message: "Su compra fue concretada de manera exitosa!",
                                ticket: ticket[i],
                                event: info[i]
                            }
                            dispatch(postTicket(ticket[i]))
                            dispatch(putEvent(putEvento, idEvent[i]))
                            dispatch(postMail(datosEmail))
                           
                        }
                    }
                    //>>aca podemos accionar cualquier lógica necesaria que le indique al user que todo funcionó<<
                },
                onError: (err) => {
                    
                }
            })
                .render(paypal.current)
        }
    }, [cantidad])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}