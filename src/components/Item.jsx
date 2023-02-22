import '../App.css';
import { Link } from 'react-router-dom';

export default function Item ({product}){
    return (
        <div className='container'>
            <img src={product.imageURL} alt={product.name}></img>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3 >
        </div>
    )
}; 