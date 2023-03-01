import React from 'react'
//import logo from '../../Imagenes/pluma.png'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import pluma from '../../Imagenes/pluma.png'

export default function Footer() {
    return (
        <footer className='bg-dark py5'>
            <div className='container-xl'>
                <div className='row align-items-start text-light'>


                    <nav className='col-md-3 d-grid gap-2'>
                        <h2 className='' style={{ color: "white" }}>Ubicacion</h2>
                        <p className='text-light' >Av. Gral. Julio Argentino Roca 1250</p>
                        <p className='text-light' >General Roca - Rio Negro</p>

                    </nav>

                    <nav className='col-md-3 d-grid gap-2'>
                        <h2 className='' style={{ color: "white" }}>Horario</h2>
                        <p className='text-light' >Martes a viernes: 10:00 a.m - 5:00 p.m</p>
                        <p className='text-light' >Sábado y domingo: 11:00 a.m - 6:00 p.m</p>
                    </nav>


                    <nav className='col-md-2 d-grid gap-2'>
                        <h2 className='text-light font-weight-bold ' style={{ color: "white" }} >Museo</h2>
                        <a href='/general' className='text-light text-decoration-none'>Planea tu visita</a>
                        <a href='/history' className='text-light text-decoration-none'>Acerca</a>
                        <a href='/history' className='text-light text-decoration-none'>Historia</a>
                        <a href='/general' className='text-light text-decoration-none'>Contacto</a>
                    </nav>
                    <nav className='col-md-2 d-grid gap-2 me-auto'>
                        <h2 className='text-light' >Colecciones</h2>
                        <a href='/areaPaleo' className='text-light text-decoration-none'>Paleontología</a>
                        <a href='/areaBio' className='text-light text-decoration-none'>Biológica</a>
                        <a href='/areaBio' className='text-light text-decoration-none'>Geológica y Mineralógica</a>
                    </nav>

                    <div className='col-lg-2 d-flex align-content-center flex-wrap justify-content-around align-items-center gap-2 py-5 '>
                        <a href="https://www.facebook.com/museopatagonico" target='_blank' rel='noreferrer noopener' className='text-light' ><BsFacebook size={40} /></a>
                        <a href='https://www.instagram.com/museopatagonico' target='_blank' rel='noreferrer noopener' className='text-light'><BsInstagram size={40} /></a>
                    </div>
                </div>
            </div>
            <img className="logo-foot" src={pluma} alt="logo-foot" style={{ width: '3rem' }} />
            <div className='container-xl'>
                <p className='text-light' style={{ marginBottom: '-3rem' }}>&copy; Copyright - All rights reserved.</p>
            </div>
        </footer>
    )
}
