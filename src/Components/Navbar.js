import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import EnderLogo from '../Logo/EnderLogo.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
    return (
        <>
         <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Enders Gate <img src={EnderLogo} alt="EnderLogo" width="50" height="50" style = {{marginLeft : 5}}/>
                </Link>
                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className= 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/gameplay' className='nav-links' onClick={closeMobileMenu} style = {{verticalAlign: 'top'}}>
                            Game Play
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/cardpacksNFT' className='nav-links' onClick={closeMobileMenu}>
                            Card Packs NFT
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
             </div>
         </nav>   
        </>
    )
}

export default Navbar
