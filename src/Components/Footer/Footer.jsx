import React from 'react'
//import logo from '../../Imagenes/pluma.png'
import './Styles/Footer.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className='bg-dark py5'>
        <div className='container-xl'>
            <div className='row align-items-start text-light'>                                
                <div className='col-md-3 d-grid gap-2'>                    
                    {/* <img  className=" img-thumbnail " src={logo} alt="logo"/> */}
                    <h2 className=''>Ubicacion</h2>
                    <p className='text-light' >Av. Gral. Julio Argentino Roca 1250</p>
                    <h2 className=''>Horario</h2>
                    <p className='text-light' >Martes a viernes: 10:00 a.m - 5:00 p.m</p>
                    <p className='text-light' >Sábado y domingo: 11:00 a.m - 6:00 p.m</p>
                </div>
            

                <nav className='col-md-2 d-grid gap-2'>
                    <h2 className='text-light font-weight-bold ' >Museo</h2>
                    <a href='#' className='text-light text-decoration-none'>Planea tu visita</a>
                    <a href='#' className='text-light text-decoration-none'>Acerca</a>
                    <a href='#' className='text-light text-decoration-none'>Historia</a>
                    <a href='#' className='text-light text-decoration-none'>Contacto</a>
                </nav>                
                <nav className='col-md-2 d-grid gap-2 me-auto'>
                    <h2 className='text-light' >Colecciones</h2>
                    <a href='#' className='text-light text-decoration-none'>Paleontología</a>
                    <a href='#' className='text-light text-decoration-none'>Biológica</a>
                    <a href='#' className='text-light text-decoration-none'>Geológica y Mineralógica</a>
                </nav>

                <div className='col-lg-2 d-flex align-content-center flex-wrap justify-content-around align-items-center gap-2 py-5 '>
                    <a href="https://www.facebook.com/museopatagonico" target='_blank' rel='noreferrer noopener' className='text-light' ><BsFacebook size={40}/></a>
                    <a href='https://www.instagram.com/museopatagonico' target='_blank' rel='noreferrer noopener' className='text-light'><BsInstagram size={40}/></a>
                    <a href='#' className='btn btn-outline-light'>Español</a>
                </div>
            </div>
        </div>
        <div className='container-xl'>
            <p className='text-light' >&copy; Copyright - All rights reserved.</p>
        </div>
    </footer>
  )
}
