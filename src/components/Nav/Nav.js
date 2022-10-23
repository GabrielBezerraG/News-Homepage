import './Nav.css';

export default function Nav(props) {
   return (
      <nav className={
         props.menuVisibility ? 'nav'
         : 'nav nav--inactive'
      }>
         <button onClick={props.openMobileMenu} className='nav__close-button' />
         <ul className='nav__list'>
            <li className='nav__list__item'>Home</li>
            <li className='nav__list__item'>New</li>
            <li className='nav__list__item'>Popular</li>
            <li className='nav__list__item'>Trending</li>
            <li className='nav__list__item'>Categories</li>
         </ul>
      </nav>
   )
}