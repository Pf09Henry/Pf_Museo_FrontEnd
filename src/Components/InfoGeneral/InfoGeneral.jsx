import React from 'react'
import './Styles/InfoGeneral.css'
// import fachada1 from '../../Imagenes/Pictures_fachada_museo/MuseoFachada1.jpg'
import dinosaurs from '../../Imagenes/Pictures_fossils/Dinosaurios.jpg'
import lagartija from '../../Imagenes/Pictures_Biologia/BiologiaNueve.jpg'



export default function InfoGeneral() {
    return (
        <div className='container-fluid d-flex-wrap' >
            <div className="position-relative overflow-hidden p-3 p-lg-5 m-md-3 text-center bg-light">
                {/* <div classNameName="col-md-5 p-lg-5 mx-auto my-5"> */}
                    <h1 className="display-4 fw-normal">Direccion</h1>
                    <p className="lead fw-normal">Av. Gral. Julio Argentino Roca 1250</p>
                    <br />
                    <div id="map-container-google-1" className="z-depth-1-half map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.2898048951615!2d-67.57906568362394!3d-39.03151131246983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a1ceb55f228c9%3A0x843c188f09e8e9b6!2sMuseo%20Patag%C3%B3nico%20de%20Ciencias%20Naturales%20Juan%20Carlos%20Salgado!5e0!3m2!1ses-419!2sco!4v1675526663069!5m2!1ses-419!2sco" 
                                allowFullScreen="" loading="lazy" 
                                title='MPCN_Location' referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
            {/* Tarjetas de Horarios */}
            <div className="position-relative overflow-hidden p-3 p-lg-5 m-md-3 text-center" >
            <h1 className="display-4 fw-normal">Horarios</h1>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 justify-content-center  ">
                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Martes a Viernes:</h2>
                        <p className="lead">10:00 a.m - 5:00 p.m</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto cardsInformacion">
                        <img src={lagartija} alt="dinosaurios" className='imagenContenedor' />
                    </div>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Sábado y domingo:</h2>
                        <p className="lead">11:00 a.m - 6:00 p.m</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto cardsInformacion">
                        <img src={dinosaurs} alt="dinosaurios" className='imagenContenedor' />
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}