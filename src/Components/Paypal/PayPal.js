import axios from 'axios';
import React, { useRef, useEffect, useContext, useState } from 'react'
import { CartContext } from '../../Context/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, postTicket,putEvent } from '../../Actions/AppActions/appActions';
import Swal from 'sweetalert2';



export default function Paypal() {
    const { user } = useAuth0();
    const usuario = useSelector((state)=> state.users)
    const eventos = useSelector((state)=> state.eventos)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, saveProducts } = useContext(CartContext);


    function findUserID (name){
        let findUser = usuario.filter((e)=> e.name === user.name)
         console.log("USUARIO",findUser[0].id) 
        return findUser[0].id
    }

  
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
/*     console.log("PRODUCTOS",products)
    console.log("INFO",info)
    console.log("ACOUNT",acount)
    console.log("AMOUNT",amount)
    console.log(idEvent)

    console.log("TOTAL",total) */

    const paypal = useRef();
   
        const ticket = {
            methodOfPurchase: 'PayPal' || '',
            amount: parseInt(amount[0]) || '',
            totalOfPurchase: total,
            eventId: idEvent[0] || '',
            userId: findUserID(user.name) || '',
        }



        function findEventCupos (id){
            let findEvent = eventos.filter((e)=> e.id === id)
          
           return findEvent[0].availability
           
        }

        const putEvento = {
            availability: findEventCupos(idEvent[0]) - parseInt(amount[0]),
        }
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
                /* console.log("actions: ", actions) */
                const order = await actions.order.capture();
               /*  console.log("esto es order: ", order) */
                if (order) {
                    Swal.fire({
                        title: 'Ok',
                        text: 'Tu Pago fue efectuado con Exito',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                    // axios.post("http://localhost:3001/send_email", {
                    //     mail: user.email,
                    //     subject: "Pago realizado con Exito!",
                    //     message: "Su pago fue concretado de manera exitosa! "
                    // })
                    // dispatch(postTicket(valuesId))
                    // console.log('Aqui post', postTicket)
                    dispatch(postTicket(ticket))
                    dispatch(putEvent(putEvento, idEvent[0]))
                  /*   console.log('Aqui post', postTicket) */
                      
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