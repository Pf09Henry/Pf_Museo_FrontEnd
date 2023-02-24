import React from 'react'
import './Styles/InfoGeneral.css'
import fachada2 from '../../Imagenes/Pictures_fachada_museo/fachadaLateral.jpg'
import fachada3 from '../../Imagenes/Pictures_fachada_museo/FachadaFar.jpg'
import dinosaurs from '../../Imagenes/Pictures_fossils/11141176_1388503954810254_6766559355664383940_n 1.jpg'
import lagartija from '../../Imagenes/Pictures_Biologia/LagartoDos.jpg'
import Servicies from '../Servicies/Servicies'
import PrecioEntrda from './PrecioEntrada'



export default function InfoGeneral() {
    return (
        <div className='container-fluid d-flex-wrap' >
            <div className="position-relative overflow-hidden p-3 p-lg-5 m-md-3 text-center bg-light">
                {/* <div classNameName="col-md-5 p-lg-5 mx-auto my-5"> */}
                    <h1 className="display-4 fw-normal">Direccion</h1>
                    <p className="lead fw-normal">Av. Gral. Julio Argentino Roca 1250</p>
                    <br />
                    <div id="map-container-google-1" className="z-depth-1-half map-container border shadow-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.2898048951615!2d-67.57906568362394!3d-39.03151131246983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a1ceb55f228c9%3A0x843c188f09e8e9b6!2sMuseo%20Patag%C3%B3nico%20de%20Ciencias%20Naturales%20Juan%20Carlos%20Salgado!5e0!3m2!1ses-419!2sco!4v1675526663069!5m2!1ses-419!2sco" 
                                allowFullScreen="" loading="lazy" 
                                title='MPCN_Location' referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
            {/* Tarjetas de Horarios */}

            <div className="position-relative overflow-hidden p-3 p-lg-5 m-md-3 text-center " >
                <h1 className="display-4 fw-normal">Horarios</h1>
                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 justify-content-center   ">
                    <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded border shadow-lg">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Martes a Viernes:</h2>
                            <p className="lead">10:00 a.m - 5:00 p.m</p>
                        </div>
                        <div className="bg-light shadow-sm mx-auto cardsInformacion">
                            <img src={lagartija} alt="dinosaurios" className='imagenContenedor' />
                        </div>
                    </div>
                    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded border shadow-lg">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Sábado y Domingo:</h2>
                            <p className="lead">11:00 a.m - 6:00 p.m</p>
                        </div>
                        <div className="bg-dark shadow-sm mx-auto cardsInformacion">
                            <img src={dinosaurs} alt="dinosaurios" className='img-fluid imagenContenedor' />
                        </div>
                    </div>                
                </div>

                <PrecioEntrda/>

                 {/* Tarjetas de Servicios en un componente independiente */}

                <Servicies/>           

                  {/* Carrusel con imagenes de la fachada del museo */}
                <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded">
                    <h1 className='display-5 fw-normal text-light' > ¡ Te esperamos ! </h1>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={fachada2} className="carouselItem" alt="fachada"/>
                            </div>
                            <div className="carousel-item">
                                <img src={fachada3} className="carouselItem" alt="fachada"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                            

                </div>
            </div>
        </div>
)
}