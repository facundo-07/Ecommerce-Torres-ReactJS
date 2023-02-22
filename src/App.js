import './App.css';
import NavBar from './components/Nav.jsx';
import Title from './components/Title.jsx';
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from './components/Home.jsx';
import Cart from './components/Cart.jsx';


function App() {
  return (
    <div>
        
        <NavBar/>
        
        <Routes>
            
            <Route path="/" element={<Home/>}></Route>
            <Route path="/store" element={<Cart/>}></Route>
            <Route path="/store/:categoryId" element={<Cart/>}></Route>
            <Route path="/item/:name" element={<Cart/>}></Route>
        </Routes>
        
        
    </div>
  );
};






export { App };
