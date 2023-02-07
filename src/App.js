import './App.css';
import NavBar from './components/Nav.jsx';
import Title from './components/Title.jsx';
import Cart from './components/Cart.jsx';
import { Router, Routes, Route } from "react-router-dom";
import {Home} from './components/Home.jsx';


function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>

            <Route path="/store" element={<Cart/>}>
            </Route>
        </Routes>
    </div>
  );
}





export { App };
