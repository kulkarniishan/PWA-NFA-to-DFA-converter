import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar/navbar';
import { Route, Routes, Navigate} from "react-router-dom";
import Home from './components/Home/Home';
import Aboutus from './components/AboutUs/Aboutus';

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Routes>
        <Route path='/about-us'  element={<Aboutus/>} />
        <Route path='/dashboard'  element={<Home/>} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
