import React from "react";

export default function InformationCheckout(){
    return(
        <div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Informacion de Contacto
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombres</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            <label for="exampleFormControlInput1" class="form-label">Apellidos</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            <label for="exampleFormControlInput1" class="form-label">Edad</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Informacion de Residencia
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Direccion de Residencia</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            <label for="exampleFormControlInput1" class="form-label">Provincia</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            <label for="exampleFormControlInput1" class="form-label">Codigo Postal</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>                        
                    </div>
                    </div>
                </div>
                <a href='/payment' className='btn btn-success' >Continuar</a>
                {/* <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div> */}
            </div>

                {/* <div>
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
                </div> */}
            {/* <div>
                <h3>Pedido</h3>
                <div>
                    <div className="sideBar">
                        <h4>Elemento</h4>
                        <span>$100</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}