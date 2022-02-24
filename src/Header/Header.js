import './Header.css';
import {useState} from 'react';
import TopWear from './Options/TopWear/TopWear';
import BottomWear from './Options/BottomWear/BottomWear';
import Cosmetics from './Options/Cosmetics/Cosmetics';
import FootWear from './Options/FootWear/FootWear';
import WinterWear from './Options/WinterWear/WinterWear';
import Drapes from './Options/Drapes/Drapes';
import Wishfull from './Options/Wishfull/Wishfull';

function Header({searchvaluefunc}){
    

    return(
        
<div className='header'>
    <img className='image-logo' src='https://wforwomanonline.com/images/logo.png' alt="logo"></img>
    <div className='options'>
    <div className='newin'>NEWIN</div>
    <TopWear/>
    <BottomWear/>
    <Cosmetics/>
    <FootWear/>
   <WinterWear/>
    <Drapes/>
    <Wishfull/>
    <div className='sale'>SALE</div>
    </div>
    <div className='right'>
        <input type='text' className='input-box' placeholder='Search' />
        <span><img id="g-search-button"src='https://tse4.mm.bing.net/th?id=OIP.cdoxldP5wXEZRcvx1f1aaAHaHa&pid=Api&P=0&w=159&h=159' alt='search-btn'></img></span>
        <span><span id="login-name">LOGIN</span><img id="login-logo" src='https://www.freeiconspng.com/uploads/user-login-icon-14.png' alt='login-btn'/></span>
        <span><span id="wishlist-name">WISHLIST</span><img id='wishlist-logo' src='https://tse4.mm.bing.net/th?id=OIP.VDNrxINNAldMTmfbPJP5ggHaGP&pid=Api&P=0&w=207&h=174' alt='wishlist-btn' /></span>
        <span><span id="cart-name">CART</span><img id="cart-logo" src='https://pic.onlinewebfonts.com/svg/img_290616.png' alt='cart-btn'/></span>
    </div>
</div>
    )
}
export default Header;