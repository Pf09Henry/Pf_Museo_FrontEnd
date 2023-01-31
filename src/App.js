import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
