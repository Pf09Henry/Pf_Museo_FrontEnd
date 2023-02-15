import React, { useRef, useEffect, useState } from 'react'


export default function Paypal() {
    
    const paypal = useRef();
    const [info, setInfo] = useState({
        description: '',
        amount: 0,
    })
    
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: 'description',
                            amount: {
                                currency_code: "USD",
                                value: 2,
                            }
                        },
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                if(order){
                    alert('Pago Realizado con Exito')
                }
                console.log("pago realizado")
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

