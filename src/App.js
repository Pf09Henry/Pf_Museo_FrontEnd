import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
