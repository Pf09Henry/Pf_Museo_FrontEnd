import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Exhibits from './Components/Exhibits/Exhibits';
import Details from './Components/Details/Details';
import AreaPaleo from './Components/areaPaleo/areaPaleo';
import AreaBio from './Components/areaBio/areaBio';
import AreaEducation from './Components/areaEducation/areaEducation';
import Culture from './Components/Activities/Culture/Culture'
import Holidays from './Components/Activities/Holidays/Holidays'
import Night from "./Components/Activities/Night/Night";
//import Login from './Components/Login/Login';
//import Register from './Components/Register/Register';
import Nav from './Components/Nav/Nav';
import Historia from './Components/Historia/Historia';
import Crear from './Components/FormCreacion/CrearEvento';
import InfoGeneral from './Components/InfoGeneral/InfoGeneral';
import EventoList from './Components/Eventos/EventosList';
import Checkout from './Components/Checkout/Checkout';
import InformationCheckout from './Components/informationCheckout/InformationCheckout';
import Payment from './Components/Payment/Payment';
import EventDetails from './Components/EventDetails/EventDetails';
import Error404 from './Components/Error404/Error404';
import { useAuth0 } from "@auth0/auth0-react";
//import { PageLoader } from "./components/page-loader";
import  {AuthenticationGuard}  from "./Auth0/authentication";
import {Profile} from './Components/Login/Profile';
import AgregarEvento from './Components/Dashboard/Eventos/Agregar';
import ModificarEvento from './Components/Dashboard/Eventos/Modificar'
import AgregarUsuario from './Components/Dashboard/Usuarios/Agregar';
import ModificarUsuario from './Components/Dashboard/Usuarios/Modificar'
import AgregarGuia from './Components/Dashboard/Guias/Agregar';
import ModificarGuia from './Components/Dashboard/Guias/Modificar';
import Modificar from './Components/Dashboard/Comentarios/Modificar';
import AgregarCategoria from './Components/Dashboard/Categorias/Agregar';
import Register from './Components/Register/Register'

import LoginForm  from './Components/Login/LoginForm';
import Dash from './Components/Dashboard/Dashboard/Dashboard-Inicio';


// function useLocalStorage(itemName, initialValue){
//   const localStorageItem = localStorage.getItem(itemName);
//   let parsedItem;

//   if(!localStorageItem){
//     localStorage.setItem(itemName, JSON.stringify(initialValue));
//     parsedItem = initialValue;      
//   }else{
//     parsedItem = JSON.parse(localStorageItem);
//   }
  
//   const [item, setItem] = React.useState(parsedItem)

//   const saveItem = (newItem) => {
//     const stringifyItem = JSON.stringify(newItem);
//     localStorage.setItem(itemName, stringifyItem);
//     setItem(newItem)
//   }
//   return [
//     item,
//     saveItem
//   ] 
// }

function App() {
  const { isLoading } = useAuth0();

  const localStorageItem = localStorage.getItem('CART_V1');
  let parsedItem;

  if(!localStorageItem ){
    localStorage.setItem('CART_V1', JSON.stringify([]));
    parsedItem = [];      
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [products, setProducts] = useState(parsedItem); //'CART_V1', []


  const saveProducts = (newProducts) =>  {
    const stringifyProducts = JSON.stringify(newProducts);
    localStorage.setItem('CART_V1', stringifyProducts );
    setProducts(newProducts);
  }
  
  if (isLoading) {
    return (
      <div className="page-layout">
        ...{ isLoading}
      </div>
    );
  }

  return (
    <div className="App">
    <Nav saveProducts={saveProducts} />
      <Routes>         
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/profile' element={<AuthenticationGuard component= {Profile} />} />
        <Route path='/loginform' element=  {<LoginForm/>} />
        <Route path='/exhibits' element={<Exhibits />} />
        <Route path='/details' element={<Details />} />
        <Route path='/areaPaleo' element={<AreaPaleo />} />
        <Route path='/areaBio' element={<AreaBio />} />
        <Route path='/areaEducation' element={<AreaEducation />} />
        <Route path='/culture' element={<Culture />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/night' element={<Night />} />
        <Route path='/register' element={<Register/>} />

        <Route path='/history' element={<Historia/>} />
        <Route path='/create-activitie' element={<Crear/>} />
        <Route path='/general' element={<InfoGeneral/>} />
        <Route path='/eventos' element={<EventoList/>} />

        <Route path='/checkout' element={<Checkout saveProducts={saveProducts}/>} />
        <Route path='/checkoutInfo' element={<InformationCheckout/>} />
        <Route path='/payment' element={<Payment/>}/>

        <Route path='/event/:id' element={<EventDetails
                                  products={products}
                                  saveProducts={saveProducts}/>} />
        <Route path='*' element={<Error404/>} />
  
        <Route path='/dashboard' element={<Dash/>} />
        <Route path='/dashoboard-eventos-agregar' element={<AgregarEvento/>} />
        <Route path='/dashoboard-eventos-modificar' element={<ModificarEvento/>} />
        <Route path='/dashoboard-user-agregar' element={<AgregarUsuario/>} />
        <Route path='/dashoboard-user-modificar' element={<ModificarUsuario/>} />
        <Route path='/dashoboard-guias-agregar' element={<AgregarGuia />} />
        <Route path='/dashoboard-guias-modificar' element={<ModificarGuia />} />
        <Route path='/dashoboard-comentarios-modificar' element={<Modificar />} />
        <Route path='/dashoboard-categorias-agregar' element={<AgregarCategoria />} />
    
      </Routes>
      <Footer />

    </div>
  );
}


export default App;

