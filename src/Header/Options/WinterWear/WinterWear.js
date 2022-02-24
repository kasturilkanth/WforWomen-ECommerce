import {useState} from 'react';
import './WinterWear.css';



function WinterWear(){
    const[displayWinterwear,setDisplayWinterwear]=useState(false)
    return(
        <div>
    <div className='winterwear' onMouseEnter={()=>setDisplayWinterwear(true)} >WINTER WEAR</div>
    {displayWinterwear?
    <div className="winterwear-cont" onMouseLeave={()=>setDisplayWinterwear(false)}>
    <div className='winter-kurtas'>WINTER KURTAS</div>
    <div className='outerwear'>OUTWEAR</div>
    <div className='plus-size-winter'>PLUS SIZE</div>
    
    </div>
    :null}</div>

    )
}
export default WinterWear;