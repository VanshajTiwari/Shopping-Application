import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import Singup from './pages/Signup';
function App() {


  return(
   
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Singup/>}/>
          </Routes>
      </BrowserRouter>
    
  );

}

export default App
