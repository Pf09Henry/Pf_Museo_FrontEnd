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
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
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
import Dashboard from './Components/Dashboard/Dashboard';


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

  return (
    <div className="App">
    <Nav saveProducts={saveProducts} />
      <Routes>         
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/exhibits' element={<Exhibits />} />
        <Route path='/details' element={<Details />} />
        <Route path='/areaPaleo' element={<AreaPaleo />} />
        <Route path='/areaBio' element={<AreaBio />} />
        <Route path='/areaEducation' element={<AreaEducation />} />
        <Route path='/culture' element={<Culture />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/night' element={<Night />} />

        <Route path='/history' element={<Historia/>} />
        <Route path='/create-activitie' element={<Crear/>} />
        <Route path='/general' element={<InfoGeneral/>} />
        <Route path='/eventos' element={<EventoList/>} />

        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/checkoutInfo' element={<InformationCheckout/>} />
        <Route path='/payment' element={<Payment/>}/>

        <Route path='/event/:id' element={<EventDetails
                                  products={products}
                                  saveProducts={saveProducts}/>} />
        <Route path='*' element={<Error404/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer />

    </div>
  );
}


export default App;

