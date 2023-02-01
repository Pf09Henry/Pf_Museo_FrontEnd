import React from 'react'
//import logo from '../../Imagenes/pluma.png'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className='bg-dark py5'>
        <div className='container-xl'>
            <div className='row align-items-start text-light'>                                
                <div className='col-md-2 d-grid gap-2'>                    
                    {/* <img  className=" img-thumbnail " src={logo} alt="logo"/> */}
                    <h2 className='' >Ubicacion</h2>
                    <p className='text-secondary' >Av Hidalgo 45, Centro historico</p>
                    <h2 className='' >Horario</h2>
                    <p className='text-secondary' >Martes a viernes: 10:00 a.m - 5:00 p.m</p>
                    <p className='text-secondary' >Sábado y domingo: 11:00 a.m - 6:00 p.m</p>
                </div>
            

                <nav className='col-md-2 d-grid gap-2'>
                    <h2 className='text-light' >Museo</h2>
                    <a href='#' className='text-secondary text-decoration-none'>Planea tu visita</a>
                    <a href='#' className='text-secondary text-decoration-none'>Acerca</a>
                    <a href='#' className='text-secondary text-decoration-none'>Historia</a>
                    <a href='#' className='text-secondary text-decoration-none'>Contacto</a>
                </nav>                
                <nav className='col-md-2 d-grid gap-2 me-auto'>
                    <h2 className='text-light' >Colecciones</h2>
                    <a href='#' className='text-secondary text-decoration-none'>Paleontología</a>
                    <a href='#' className='text-secondary text-decoration-none'>Biológica</a>
                    <a href='#' className='text-secondary text-decoration-none'>Geológica y Mineralógica</a>
                </nav>

                <div className='col-md-2 d-grid gap-3'>
                    <h6 ><BsFacebook/>Museo Patagonico de Ciencias Naturales</h6> 
                    <h6><BsInstagram/> Museo Patagonico de Ciencias Naturales</h6>
                    <h6><BsTwitter />@Museo Patagonico de Ciencias Naturales</h6> 
                    <a hef='#' className='btn btn-outline-light'>Español</a>
                </div>
            </div>
        </div>
        <div className='container-xl'>
            <p className='text-light' >&copy; Copyright - All rights reserved.</p>
        </div>
    </footer>
  )
}
