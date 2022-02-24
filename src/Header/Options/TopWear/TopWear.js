import {useState} from 'react';
import './TopWear.css';



function TopWear(){
    const[displayTopwear,setDisplayTopwear]=useState(false)
    return(
        <div>
    
    <div className='topwear' onMouseEnter={()=>setDisplayTopwear(true)} >TOP WEAR</div>
    {displayTopwear?
    <div className="topwear-cont" onMouseLeave={()=>setDisplayTopwear(false)}>
    <div className='kurtas'>KURTAS</div>
    <div className='sets'>SETS & DRESSES</div>
    <div className='tops'>TOPS</div>
    <div className='gilets'>GILETS</div>
    <div className='plus'>PLUS SIZES</div>
    <div className='folksong'>FOLKSONG</div>
    </div>
    :null}
    </div>
     
    )
}
export default TopWear;