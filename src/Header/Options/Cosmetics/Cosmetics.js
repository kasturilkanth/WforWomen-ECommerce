import React,{useState} from 'react'
import './Cosmetics.css';

function Cosmetics() {
    const[displayCosmetics,setDisplayCosmetics]=useState(false)
  return (
    <div>
        <div className='cosmetics' onMouseEnter={()=>setDisplayCosmetics(true)} >COSMETICS</div>
        {displayCosmetics?
    <div className="cosmetics-cont" onMouseLeave={()=>setDisplayCosmetics(false)}>
    <div className='lips'>LIPS</div>
    <div className='eyes'>EYES</div>
    <div className='nails'>NAILS</div>
    <div className='face'>FACE</div>
    
    </div>
    :null}
    </div>
  )
}

export default Cosmetics