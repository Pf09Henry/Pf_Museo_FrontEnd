import React from "react";

export default function InformationCheckout(){
    return(
        <div>
            <div>
                <div>
                    <h2>Informacion de Contacto</h2>
                </div>
                <div>
                    <form action="" >
                        <input type="text" placeholder="Nombre Completo ..." name="name" />
                        <input type="text" placeholder="Correo Electronico ..." name="email" />
                        <input type="text" placeholder="Direccion" name="name" />
                        <input type="text" placeholder="Apto ..." name="name" />                        
                        <input type="text" placeholder="Ciudad ..." name="name" />
                        <input type="text" placeholder="Provincia ..." name="name" />
                        <input type="text" placeholder="Codigo Postal ..." name="name" />
                        <input type="text" placeholder="Telefono ..." name="name" />                    
                    </form>
                </div>
                <div>
                    <div>Regresar</div>
                    <div>Pagar</div>
                </div>
            </div>
            <div>
                <h3>Pedido</h3>
                <div>
                    <div className="sideBar">
                        <h4>Elemento</h4>
                        <span>$100</span>
                    </div>
                </div>
            </div>
        </div>
    )
}