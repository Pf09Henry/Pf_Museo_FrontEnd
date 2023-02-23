import axios from 'axios';
import React, { useRef, useEffect, useContext, useState } from 'react'
import { CartContext } from '../../Context/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postTicket } from '../../Actions/AppActions/appActions';
import Swal from 'sweetalert2';


export default function Paypal() {

    const { user } = useAuth0();
    const usuario = useSelector((state)=> state.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function findUserID (name){
        let findUser = usuario.filter((e)=> e.name === user.name)
        console.log(findUser[0].id)
        return findUser[0].id
    }

    const { products, saveProducts } = useContext(CartContext);
    
    let info = [];
    let acount = [];
    let amount = [];
    let idEvent = [];
    
    
    
    for (let i = 0; i < products.length; i++) {
        info.push(products[i].name)
        acount.push(products[i].price)
        amount.push(products[i].cantidad)
        idEvent.push(products[i].id)        
    }
    let total = acount*amount
    console.log(products)
    console.log(info)
    console.log(acount)
    console.log(idEvent)
    console.log(total)
    
    const paypal = useRef();
        const ticket = {
            methodOfPurchase: 'PayPal' || '',
            amount: acount || '',
            totalOfPurchase: total,
            eventId: idEvent || '',
            userId: findUserID(user.name) || '',
        }
        console.log('Aqui los :', ticket)
        
        useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                console.log("1: ", data)
                console.log("2: ", actions)
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
                console.log("esto es order: ", order)
                return order
            },
            onCancel: (data) => {
                alert("pago cancelado!")
                console.log(data)
            },
            onApprove: async (data, actions) => {
                console.log("actions: ", actions)
                const order = await actions.order.capture();
                console.log("esto es order: ", order)
                if (order) {
                    Swal.fire({
                        title: 'Upss!',
                        text: 'Tu Pago fue efectuado con Exito',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                    // axios.post("http://localhost:3001/send_email", {
                    //     mail: user.email,
                    //     subject: "Pago realizado con Exito!",
                    //     message: "Su pago fue concretado de manera exitosa! "
                    // })
                    dispatch(postTicket(ticket))
                    console.log('Aqui post', postTicket)
                    saveProducts([])
                }
                navigate('/eventos')
                console.log(data)
                //>>aca podemos accionar cualquier lógica necesaria que le indique al user que todo funcionó<<
            },
            onError: (err) => {
                console.log(err)
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

