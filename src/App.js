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



function App() {
  return (
    <div className="App">
      <Nav />
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
        <Route path='/history' element={<Historia />} />
        <Route path='/create-activitie' element={<Crear />} />

      </Routes>
      <Footer />
    </div>
  );
}


export default App;

