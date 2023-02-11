import React from "react";
import logo from '../../Imagenes/logo.png'
import './Nav.css'
import Login from "../Login/Login";
import Logout from "../Login/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../Login/Profile";



export default function Nav() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">


          <img className="logo-nav" src={logo} alt="logo" />

          <a class="nav-link" href="/" role="button" >
            Inicio
          </a>


          <ul class="navbar-nav me-auto mb-2 mb-lg-0 contenedor-nav">

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Programá tu visita
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/general ">Información General</a></li>
                <li><a class="dropdown-item" href="/exhibits">Exhibiciones</a></li>
                <li><a class="dropdown-item" href="/eventos">Eventos</a></li>
              </ul>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Institucional
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/history">Nuestra Historia</a></li>
                <li><a class="dropdown-item" href="/history">Misión y Objetivos</a></li>
                <li><a class="dropdown-item" href="/history">Instalaciones</a></li>
              </ul>
            </li>




            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Áreas de trabajo
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/areaPaleo ">Paleontología</a></li>
                <li><a class="dropdown-item" href="/areaBio ">Biodiversidad</a></li>
                <li><a class="dropdown-item" href="/areaEducation ">Educación</a></li>
              </ul>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Actividades
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/holidays ">Vacaciones de Invierno</a></li>
                <li><a class="dropdown-item" href="/culture ">Ciclos Culturales</a></li>
                <li><a class="dropdown-item" href="/night ">Noche en el Museo</a></li>
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
            <Profile/>


            <a href='/create-activitie'><button type="button" class="btn btn-outline-success btn-secundario">Crear Evento</button></a>
            {/* <a href="/login"><button type="button" class="btn btn-outline-success btn-secundario">Iniciar Sesión</button></a> */}
            {/* <a href="/register"><button type="button" class="btn btn-success btn-primario">Crear Cuenta</button></a> */}
            <div className="nav-bar__buttons">
              {!isAuthenticated && (
                <>        
                  <Login/>
                </>
              )}
              {isAuthenticated && (
                <>            
                  <Logout/>
                </>
              )}
            </div>

          </ul>


        </div>
      </div>
    </nav>
  )
}