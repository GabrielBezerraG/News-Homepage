import './New.css';

export default function New() {
   return (
      <section className='new'>
         <h2 className='new__title'>New</h2>
         <div className='new__list'>
            <article className='new__list__article'>
               <h3 className='new__list__article__title'>Hydrogen VS Electric Cars</h3>
               <p className='new__list__article__text'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <hr />
            <article className='new__list__article'>
               <h3 className='new__list__article__title'>The Downsides of AI Artistry</h3>
               <p className='new__list__article__text'>What are the possible adverse effects of on-demand AI image generation?</p>
            </article>
            <hr />
            <article className='new__list__article'>
               <h3 className='new__list__article__title'>Is VC Funding Drying Up?</h3>
               <p className='new__list__article__text'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
         </div>
      </section>
   )
}