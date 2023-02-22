import Title from './Title';
import '../App.css';
import {ItemList} from './ItemList';
import { LinkContainer } from "react-router-bootstrap";

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import {products} from "../data/products.js";
import { useEffect, useState } from 'react';
import Item from './Item';

import { useParams } from 'react-router-dom';





export default function Cart(){

  const {categoryId} = useParams();

  const [prodList, setProdList] = useState([]); 

  const getProducts = new Promise((res, rej)=>{

    if (categoryId){
      const filteredProducts = products.filter((item)=>item.category===categoryId);
      setTimeout(()=>{
      res(filteredProducts)
    }, 500)
    } else{
      setTimeout(()=>{
        res(products)
      }, 500)
    }

    
  });

  useEffect(()=>{
    getProducts
    .then((response)=>{
      setProdList(response);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [categoryId]);


  return(
    <div>
      <Title text={categoryId != undefined ? `Store -> ${categoryId}` : 'Store'} />
      <Categories/>
      <ItemList productList={prodList}/>
    </div>
  );    
  }

  
function Categories(){
  return(
    <div className='categories'>
      <LinkContainer to='/store/earphones'>
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

// function EarphonesCart(){
//   return(
//     <div>
//       <Cart/>
//       <Products product={earphones}/>
//     </div>
//   );
// };

// function MobilesCart(){
//   return(
//     <div>
//       <Cart/>
//       <Products product={mobile}/>
//     </div>
//   );
// };

// function LaptopCart(){
//   return(
//     <div>
//       <Cart/>
//       <Products product={laptop}/>
//     </div>
//   );
// };

// function SmartCart(){
//   return(
//     <div>
//       <Cart/>
//       <Products product={smart}/>
//     </div>
//   );
// };

// function SpeakerCart(){
//   return(
//     <div>
//       <Cart/>
//       <Products product={speaker}/>
//     </div>
//   );
// };