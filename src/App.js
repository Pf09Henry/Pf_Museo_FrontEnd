import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Exhibits from './Components/Exhibits/Exhibits';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/home' element={<Home />} />
        <Route path='/exhibits' element={<Exhibits />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
