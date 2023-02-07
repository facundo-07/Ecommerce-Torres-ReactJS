import tiger from '../media/tiger.jpg';
import Title from './Title';

export default function Cart(){
    return(
      <div>
        <Title text='Store'/>
        <div className='container'>
                <img src={tiger}  alt=""></img>
                <img src={tiger} alt=""></img>
                <img src={tiger}  alt=""></img>
                <img src={tiger}  alt=""></img>
                <img src={tiger}  alt=""></img>
                <img src={tiger}  alt=""></img>
                <img src={tiger}  alt=""></img>
                <img src={tiger}  alt=""></img>
          </div>
      </div>
    );
  }