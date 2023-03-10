import React from "react";
import logo from '../../Imagenes/logo.png'
import './Nav.css'
import Login from "../Login/Login";
//import Logout from "../Login/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../Login/Profile";
import Singup from "../Login/Singup";
import { MdShoppingCart } from 'react-icons/md'
import CartSidebar from "../CartSidebar/CartSidebar";
import { CartContext } from "../../Context";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { Link } from "react-router-dom";


// import { useNavigate } from "react-router";



export default function Nav() {
  const { products } = React.useContext(CartContext)
  const usuario = useSelector((state) => state.users);
  const { isAuthenticated, user } = useAuth0();
  //const[existeMailDb, setExisteMailDb]= useState(false) !!!!!Probar luego con un estado local¡¡¡¡¡¡.

  if (isAuthenticated) {
    var existeMailDb = false
    if (existeMailDb === false) {
      for (let i = 0; i < usuario.length; i++) {
        if (usuario[i].email === user.email) {
          existeMailDb = true;
        }
      }
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-static fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">


            <img className="logo-nav" src={logo} alt="logo" />




            <ul className="navbar-nav me-auto mb-2 mb-lg-0 contenedor-nav">

              <a className="nav-link" href="/" role="button" >
                Inicio
              </a>

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
                  {isAuthenticated ? <li><a className="dropdown-item" href="/socios"><Button className="button__login btn btn-success btn-secundario">Asociate</Button></a></li> : null}
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
              {existeMailDb === true ?(<a href='/profile'><img  className="foto-login" src={user.picture} alt={user.name}/></a>         
              ) : (
                <>

                </>
            )}

              {/* <a href='/create-activitie'><button type="button" className="btn btn-outline-success btn-secundario">Crear Evento</button></a> */}
              {/* <a href="/login"><button type="button" className="btn btn-outline-success btn-secundario">Iniciar Sesión</button></a> */}
              {/*   <a href="/register"><button type="button" className="btn btn-success btn-primario">Crear Cuenta</button></a> */}

              <div className="nav-bar__buttons">
                {!isAuthenticated && (
                  <>
                    <Login />
                    <Singup />
                  </>
                )}
              </div>
              {/*  {isAuthenticated && (
                <>            
                  <Logout/>
                </>
              )}
          </div>
           {/*  <a href='/create-activitie'><button type="button" class="btn btn-outline-success btn-secundario">Crear Evento</button></a> */}
              {/* <a href="/login"><button type="button" class="btn btn-outline-success btn-secundario">Iniciar Sesión</button></a> */}
              {/* {isAuthenticated &&(<a href="/dashboard"><button type="button" class="btn btn-success btn-primario usuario">Perfil</button></a>) */}

              {isAuthenticated && existeMailDb && (
                <div className="d-grid position-relative">
                  <div className="row">
                    <button className="btn btn-primary position-relative " data-bs-toggle="offcanvas" data-bs-target="#cart"><MdShoppingCart size={20} /></button>
                    {!products ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span> :
                      <h5><span className="position-absolute top-0 start-100 translate-middle translate-middle badge rounded-pill bg-danger">{products.length}</span></h5>
                    }
                  </div>
                </div>
              )}
            </ul>



          </div>
        </div>

      </nav>
      <div>
        <CartSidebar id='cart' />
      </div>
    </div>
  )
}