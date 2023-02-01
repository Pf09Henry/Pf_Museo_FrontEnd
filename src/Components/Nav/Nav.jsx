import React from "react";
import logo from '../../Imagenes/logo.png'
import './Nav.css'

export default function Nav(){
    return(
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img  className="logo-nav" src={logo} alt="logo"/>
       
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 contenedor-nav">



        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Institucional
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href=" ">Nuestra Historia</a></li>
            <li><a className="dropdown-item" href=" ">Misión y Objetivos</a></li>
            <li><a className="dropdown-item" href=" ">Instalaciones</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programá tu visita
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href=" ">Como llegar</a></li>
            <li><a className="dropdown-item" href=" ">Horarios</a></li>
            <li><a className="dropdown-item" href=" ">Tarifas</a></li>
            <li><a className="dropdown-item" href=" ">Visitantes</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Áreas de trabajo
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href=" ">Dia Internacional de los Museos</a></li>
            <li><a className="dropdown-item" href=" ">Talleres Sensoriales</a></li>
            <li><a className="dropdown-item" href=" ">Pequeños Paleontólogos </a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actividades
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href=" ">Protejamos lo nuestro  (Campaña de socios)</a></li>
            <li><a className="dropdown-item" href=" ">Dona ahora</a></li>
            <li><a className="dropdown-item" href=" ">Voluntariado</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown fin-nav">
          <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Protejamos lo nuestro
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href=" ">Protejamos lo nuestro  (Campaña de socios)</a></li>
            <li><a className="dropdown-item" href=" ">Dona ahora</a></li>
          </ul>
        </li>



        
        <a href="/login"><button type="button" className="btn btn-outline-success btn-secundario">Iniciar Sesión</button></a>
        <a href="/register"><button type="button" className="btn btn-success btn-primario">Crear Cuenta</button></a>
        

        </ul>

      </div>
    </div>
  </nav>
    )
}