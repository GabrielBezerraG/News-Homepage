import './Feature.css';
import desktopImage from '../../images/image-web-3-desktop.jpg'
import mobileImage from '../../images/image-web-3-mobile.jpg'

export default function Feature() {
   return (
      <section className='feature'>
         <picture className='feature__picture'>
            <source media='(min-width:768px)' srcSet={desktopImage} />
            <img className='feature__image' src={mobileImage} alt='Colorful geometric forms' />
         </picture>
         <h1 className='feature__title'>The Bright Future of Web 3.0?</h1>
         <p className='feature__text'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
         <button className='feature__button'>READ MORE</button>
      </section>
   )
}