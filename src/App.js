import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
<<<<<<< HEAD
import Footer from './Components/Footer/Footer';

=======
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
>>>>>>> master

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home/>}/>
=======
        <Route path='/' element={<Layout/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
>>>>>>> master
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
