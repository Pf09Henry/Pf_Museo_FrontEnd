import React from 'react'
import lagarto from '../../Imagenes/Pictures_Biologia/BiologiaOcho.jpg'
import './Styles/PrecioEntrada.css'

export default function EntryPrice() {
    return (
        <main>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 mb-4">¡Una experiencia unica!</h1>
                        <p className="lead">El Museo fue concebido como un espacio educativo, científico, cultural y turístico para toda la comunidad.</p>
                        <p className="lead">Podras acceder a todas nuestras exhibiciones permanentes pagando una unica entrada</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <a href="/entradas"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Compra tu entrada</button></a>
                            <a href="/exhibits"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Exhibiciones</button></a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-1  imagenPrice " src={lagarto} alt="" width="720"/>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

            {/* <div class="bg-dark text-secondary px-4 py-5 text-center">
                <div class="py-5">
                    <h1 class="display-5 fw-bold text-white">Dark mode hero</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                            <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </main>
    )
}