import React from "react";
import logo from '../../Imagenes/logo.png'
import './Nav.css'



export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img className="logo-nav" src={logo} alt="logo" />

          <ul class="navbar-nav me-auto mb-2 mb-lg-0 contenedor-nav">



            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Institucional
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href=" ">Nuestra Historia</a></li>
                <li><a class="dropdown-item" href=" ">Misión y Objetivos</a></li>
                <li><a class="dropdown-item" href=" ">Instalaciones</a></li>
              </ul>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Programá tu visita
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href=" ">Como llegar</a></li>
                <li><a class="dropdown-item" href=" ">Horarios</a></li>
                <li><a class="dropdown-item" href=" ">Tarifas</a></li>
                <li><a class="dropdown-item" href=" ">Visitantes</a></li>
              </ul>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Áreas de trabajo
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href=" ">Dia Internacional de los Museos</a></li>
                <li><a class="dropdown-item" href=" ">Talleres Sensoriales</a></li>
                <li><a class="dropdown-item" href=" ">Pequeños Paleontólogos </a></li>
              </ul>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Actividades
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href=" ">Protejamos lo nuestro  (Campaña de socios)</a></li>
                <li><a class="dropdown-item" href=" ">Dona ahora</a></li>
                <li><a class="dropdown-item" href=" ">Voluntariado</a></li>
              </ul>
            </li>


            <li class="nav-item dropdown fin-nav">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Protejamos lo nuestro
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href=" ">Protejamos lo nuestro  (Campaña de socios)</a></li>
                <li><a class="dropdown-item" href=" ">Dona ahora</a></li>
              </ul>
            </li>


            <button type="button" class="btn btn-outline-success btn-secundario">Iniciar Sesión</button>
            <button type="button" class="btn btn-success btn-primario">Crear Cuenta</button>


          </ul>

        </div>
      </div>
    </nav>
  )
}