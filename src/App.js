import './App.css';
import NavBar from './components/Nav.jsx';
import Title from './components/Title.jsx';
// import Cart from './components/Cart.jsx';
import { Router, Routes, Route } from "react-router-dom";
import {Home} from './components/Home.jsx';
import MyCart from './components/Cart.jsx';


function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route exact path="/Preentrega1-Torres-ReactJS" element={<Home/>}>
            </Route>

            <Route path="/Preentrega1-Torres-ReactJS/store" element={<MyCart.Cart/>}>
            </Route>

            <Route path="/Preentrega1-Torres-ReactJS/store/smart-tvs" element={<MyCart.SmartCart/>}>
            </Route>

            <Route path="/Preentrega1-Torres-ReactJS/store/speakers" element={<MyCart.SpeakerCart/>}>
            </Route>

            <Route path="/Preentrega1-Torres-ReactJS/store/mobile-phones" element={<MyCart.MobilesCart/>}>
            </Route>

            <Route path="/Preentrega1-Torres-ReactJS/store/laptops" element={<MyCart.LaptopCart/>}>
            </Route>

            <Route path="/Preentrega1-Torres-ReactJS/store/earphones" element={<MyCart.EarphonesCart/>}>
            </Route>
        </Routes>
    </div>
  );
};






export { App };
