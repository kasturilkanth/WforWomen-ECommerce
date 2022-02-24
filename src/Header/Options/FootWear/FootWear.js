import {useState} from 'react';
import './FootWear.css';



function FootWear(){
    const[displayFootwear,setDisplayFootwear]=useState(false)
    return(
        <div>
    <div className='footwear' onMouseEnter={()=>setDisplayFootwear(true)} >FOOTWEAR</div>
    {displayFootwear?
    <div className="footwear-cont" onMouseLeave={()=>setDisplayFootwear(false)}>
    <div className='heels'>HEELS</div>
    <div className='flats'>FLATS</div>
    <div className='wedges'>WEDGES</div>
    
    </div>
    :null}</div>

    )
}
export default FootWear;