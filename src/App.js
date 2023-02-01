import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
