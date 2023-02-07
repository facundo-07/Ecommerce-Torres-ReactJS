import Title from './Title';
import '../App.css';
import Products from './Products.jsx';
import { LinkContainer } from "react-router-bootstrap";
import earphones from '../media/earphones.jpg';
import laptop from '../media/laptop.jpg';
import speaker from '../media/speaker.jpg';
import smart from '../media/smart.jpg';
import mobile from '../media/mobile.jpg';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart(){
    return(
      <div>
        <Title text='Store'/>
        <Categories/>
      </div>
    );
  }

  
function Categories(){
  return(
    <div className='categories'>
      <LinkContainer to='/store/earphones' >
        <Nav.Link className='category'>Earphones</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/store/laptops' >
        <Nav.Link className='category'>Laptops</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/store/mobile-phones' >
        <Nav.Link className='category'>Mobile phones</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/store/speakers' >
        <Nav.Link className='category'>Speakers</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/store/smart-tvs' >
        <Nav.Link className='category'>Smart TVs</Nav.Link>
      </LinkContainer>
    </div>
  )
};

function EarphonesCart(){
  return(
    <div>
      <Cart/>
      <Products product={earphones}/>
    </div>
  );
};

function MobilesCart(){
  return(
    <div>
      <Cart/>
      <Products product={mobile}/>
    </div>
  );
};

function LaptopCart(){
  return(
    <div>
      <Cart/>
      <Products product={laptop}/>
    </div>
  );
};

function SmartCart(){
  return(
    <div>
      <Cart/>
      <Products product={smart}/>
    </div>
  );
};

function SpeakerCart(){
  return(
    <div>
      <Cart/>
      <Products product={speaker}/>
    </div>
  );
};

export default {Cart, EarphonesCart, MobilesCart, SpeakerCart, SmartCart, LaptopCart}