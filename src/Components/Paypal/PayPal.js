import axios from 'axios';
import React, { useRef, useEffect, useContext, useState } from 'react'
import { CartContext } from '../../Context/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, postTicket, putEvent, postMail } from '../../Actions/AppActions/appActions';
import Swal from 'sweetalert2';



export default function Paypal() {
    const { user } = useAuth0();
    const usuario = useSelector((state) => state.users)
    const eventos = useSelector((state) => state.eventos)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, saveProducts } = useContext(CartContext);

    //esto es para detectar el user que hace la compra
    function findUserID(name) {
        let findUser = usuario.filter((e) => e.name === user.name)
        console.log("USUARIO", findUser[0].id)
        return findUser[0].id
    }


    let info = [];
    let acount = [];
    let amount = [];
    let idEvent = [];
    // recopila info del carrito 

    let total = 0
    for (let i = 0; i < products.length; i++) {
        info.push(products[i].name)
        acount.push(products[i].price)
        amount.push(products[i].cantidad)
        idEvent.push(products[i].id)
        total = total + (acount[i] * amount[i])
    }
    console.log("esto es total! :", total)



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

    console.log("ide evento ", idEvent)
    console.log("ticket", ticket)



    function findEventCupos(id) {
        let findEvent = eventos.filter((e) => e.id === id)

        return (findEvent[0].availability)

    }
    // let id = "52db0c75-febb-417f-a2a1-142c9e3e72a8"
    // console.log(findEventCupos(id))


    /*  console.log('Aqui los :', ticket) */



    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                /* console.log("1: ", data)
                console.log("2: ", actions) */
                const order = actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: info.join(" - "),
                            amount: {
                                currency_code: "USD",
                                value: total,
                            }
                        },
                    ]
                })
                /*  console.log("esto es order: ", order) */
                return order
            },
            onCancel: (data) => {
                Swal.fire({
                    title: 'Upss!',
                    text: 'Pago cancelado',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })

                console.log(data)
            },
            onApprove: async (data, actions) => {
                
                const order = await actions.order.capture();
                
                if (order) {
                    Swal.fire({
                        title: 'Ok',
                        text: 'Tu Pago fue efectuado con Exito',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    

                    for (let i = 0; i < ticket.length; i++) {
                        let cupos = findEventCupos(idEvent[i]) - parseInt(amount[i])
                        const putEvento = {
                            availability: cupos,
                        }
                        console.log(findEventCupos(idEvent[i]))
                        console.log("cupos: ", cupos)
                        console.log(putEvento)
                        let datosEmail = {
                            mail: user.email,
                            subject: "Pago Paypal",
                            message: "Su compra fue concretada de manera exitosa!",
                            ticket: ticket[i]
                        }
                        dispatch(postTicket(ticket[i]))
                        dispatch(putEvent(putEvento, idEvent[i]))
                        // dispatch(postMail(datosEmail))
                        // console.log("Esto es ticket:" , ticket[i]);
                        // console.log("Esto es datosEmail:" , datosEmail);
                        // console.log("Esto es putEvento:" , putEvento);
                    }


                    saveProducts([])
                }
                navigate('/eventos')
                /*      console.log(data) */
                //>>aca podemos accionar cualquier lógica necesaria que le indique al user que todo funcionó<<
            },
            onError: (err) => {
                /* console.log(err) */
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