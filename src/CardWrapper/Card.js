import React from 'react';
import './Card.css';
import {useState} from 'react';

function Card({item}) {
    // console.log(item);
    const[display,setDisplay]=useState(false);

  return (
      
    <div className='card' >
      <div className="image-cont" onMouseEnter={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)}>
        <img className='kurtas-img' src={item.image}  alt='chitra' />
      {display?
        <div className='detail'>
        <h4 >VIEW DETAIL</h4>
        </div>
       :null}
        </div>
        <div  className='heart'>♡</div>
        <h4 className='name'>{item.name}</h4>
        <h5 className='price-display'>Rs.{item.price}</h5>
      {display? <h4 className='size-dropdown'>Size:{item.size}</h4>:null}
      
       
    </div>
    
  )
}

export default Card;



