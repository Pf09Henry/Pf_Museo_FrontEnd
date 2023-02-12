import React from "react";
import logo from '../../Imagenes/logo.png'
import './Nav.css'
import {MdShoppingCart} from 'react-icons/md'
import CartSidebar from "../CartSidebar/CartSidebar";



export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          
            <img className="logo-nav" src={logo} alt="logo" />
            
                <a className="nav-link" href="/" role="button" >
                  Inicio
                </a>
            

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 contenedor-nav">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Programá tu visita
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/general ">Información General</a></li>
                  <li><a className="dropdown-item" href="/exhibits">Exhibiciones</a></li>
                  <li><a className="dropdown-item" href="/eventos">Eventos</a></li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Institucional
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/history">Nuestra Historia</a></li>
                  <li><a className="dropdown-item" href="/history">Misión y Objetivos</a></li>
                  <li><a className="dropdown-item" href="/history">Instalaciones</a></li>
                </ul>
              </li>




              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Áreas de trabajo
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/areaPaleo ">Paleontología</a></li>
                  <li><a className="dropdown-item" href="/areaBio ">Biodiversidad</a></li>
                  <li><a className="dropdown-item" href="/areaEducation ">Educación</a></li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Actividades
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/holidays ">Vacaciones de Invierno</a></li>
                  <li><a className="dropdown-item" href="/culture ">Ciclos Culturales</a></li>
                  <li><a className="dropdown-item" href="/night ">Noche en el Museo</a></li>
                </ul>
              </li>


            {/*  <li class="nav-item dropdown fin-nav">
                <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Protejamos lo nuestro
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href=" ">Voluntariado</a></li>
                  <li><a class="dropdown-item" href=" ">Afiliate</a></li>
                  <li><a class="dropdown-item" href=" ">Donaciones</a></li>

                </ul>
              </li> */}


              <a href='/create-activitie'><button type="button" className="btn btn-outline-success btn-secundario">Crear Evento</button></a>
              <a href="/login"><button type="button" className="btn btn-outline-success btn-secundario">Iniciar Sesión</button></a>
              <a href="/register"><button type="button" className="btn btn-success btn-primario">Crear Cuenta</button></a>
              <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#cart"><MdShoppingCart/></button>

            </ul>


          </div>
        </div>

      </nav>
      <CartSidebar id='cart'/>
    </div>
  )
}