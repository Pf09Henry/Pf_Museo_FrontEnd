import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import Exhibits from './Components/Exhibits/Exhibits';
import Details from './Components/Details/Details';



import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/exhibits' element={<Exhibits />} />
        <Route path='/details' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;