import axios from 'axios';
import React, { useRef, useEffect } from 'react'
import { useLocalStorage } from '../../Context/useLocalStorage';


export default function Paypal() {

    const [products, saveProducts] = useLocalStorage('CART_V1', []);
    
    let info = [];
    let acount = [];

    for(let i = 0; i<products.length; i++){
        info.push(products[i].name)
        acount.push(products[i].price) 
    }
    console.log(products)
    console.log(info)
    console.log(acount)

    const paypal = useRef();
    // const [info, setInfo] = useState({
    //     description: '',
    //     amount: 0,
    // })
    
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                console.log("1: ",data)
                console.log("2: ", actions)
                const order = actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: info.join( " - " ),
                            amount: {
                                currency_code: "USD",
                                value: acount.reduce((a,b)=>{return a + b}),
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
                console.log("actions: ",actions)
                const order = await actions.order.capture();
                console.log("esto es order: ", order)
                if(order){
                    alert('Pago Realizado con Exito')
                    axios.post("http://localhost:3001/send_email",{
                        mail: "balmaceda.d265@gmail.com",
                        subject: "Pago realizado con Exito!",
                        message: "Su pago fue concretado de manera exitosa! "
                    })
                }
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

