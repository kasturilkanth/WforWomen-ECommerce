import {useState} from 'react';
import './Drapes.css';



function Drapes(){
    const[displayDrapes,setDisplayDrapes]=useState(false)
    return(
        <div>
    <div className='drapes' onMouseEnter={()=>setDisplayDrapes(true)} >DRAPES</div>
    {displayDrapes?
    <div className="drapes-cont" onMouseLeave={()=>setDisplayDrapes(false)}>
    <div className='dupattas'>DUPATTAS</div>
    <div className='shawls'>SHAWLS</div>
    </div>
    :null}</div>

    )
}
export default Drapes;