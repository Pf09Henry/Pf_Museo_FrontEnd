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
import EventDetails from './Components/EventDetails/EventDetails';
import Error404 from './Components/Error404/Error404';
import Dashboard from './Components/Dashboard/Dashboard';
import { useAuth0 } from "@auth0/auth0-react";
//import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./Components/Authentication/authentication";
import {Profile} from './Components/Login/Profile';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        ...{ isLoading}
      </div>
    );
  }
  return (
    <div className="App">
    <Nav />
      <Routes>
     
     
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/profile' element={<AuthenticationGuard componet= {Profile} />} />
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
        <Route path='/event/:id' element={<EventDetails/>} />
        <Route path='*' element={<Error404/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer />


     
      
     
    </div>
  );
}


export default App;

