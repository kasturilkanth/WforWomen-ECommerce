import {useState} from 'react';
import './BottomWear.css';


function BottomWear(){
    const[displayBottomwear,setDisplayBottomwear]=useState(false)
return(
    <div>
    <div className='bottomwear' onMouseEnter={()=>setDisplayBottomwear(true)}>BOTTOM WEAR</div>
    {displayBottomwear?
     <div className="bottomwear-cont" onMouseLeave={()=>setDisplayBottomwear(false)}>
     <div className='pallazos'>PALLAZOS & PANTS</div>
     <div className='skirts'>SKIRTS</div>
     <div className='chudidars'>CHUDIDARS & SALWARS</div>
     <div className='plus-size-bottomwear'>PLUS SIZES</div>
     <div className='folksong-bottemwear'>FOLKSONG</div>
      
   </div>
    :null}
    
    </div>
)
}
export default BottomWear;
