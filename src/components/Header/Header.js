import Nav from '../Nav/Nav';
import './Header.css';
import logo from '../../images/logo.svg'

export default function Header(props) {
   return (
      <header className='header'>
         <img src={logo} alt='logo' className='header__logo' />
         <button onClick={props.openMobileMenu} className='header__button'>
            <i className='header__button__icon' />
         </button>
         <Nav 
            openMobileMenu={props.openMobileMenu}
            menuVisibility={props.menuVisibility} 
         />
      </header>
   )
}