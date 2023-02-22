import axios from 'axios';
import React, { useRef, useEffect, useContext } from 'react'
import { CartContext } from '../../Context/index';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


export default function Paypal() {

    const { user } = useAuth0;
    const navigate = useNavigate()

    const { products, saveProducts } = useContext(CartContext);

    let info = [];
    let acount = [];
    let amount = [];
    

    for (let i = 0; i < products.length; i++) {
        info.push(products[i].name)
        acount.push(products[i].price)
        amount.push(products[i].cantidad)
    }
    console.log(products)
    console.log(info)
    console.log(acount)

    const paypal = useRef();
    // const [info, setInfo] = useState({
    //     description: '',
    //     amount: 0,
    // })
    let total = acount*amount
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
                    alert('Pago Realizado con Exito')
                    // axios.post("http://localhost:3001/send_email", {
                    //     mail: user.email,
                    //     subject: "Pago realizado con Exito!",
                    //     message: "Su pago fue concretado de manera exitosa! "
                    // })
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

