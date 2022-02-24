import {useState} from 'react';
import './Wishfull.css';



function Wishfull(){
    const[displayWishfull,setDisplayWishfull]=useState(false)
    return(
        <div>
    <div className='wishful' onMouseEnter={()=>setDisplayWishfull(true)} >WISHFULL</div>
    {displayWishfull?
    <div className="wishfull-cont" onMouseLeave={()=>setDisplayWishfull(false)}>
    <div className='kurtas'>KURTAS</div>
    <div className='sets-dresses'>SETS & DRESSES</div>
    <div className='pp'>PALLAZOS & PANTS</div>
    <div className='skirts'>SKIRTS</div>
    </div>
    :null}</div>

    )
}
export default Wishfull;