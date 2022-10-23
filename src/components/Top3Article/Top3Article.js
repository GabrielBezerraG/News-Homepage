export default function Top3Article(props) {
   return (
      <article className='top3__article'>
         <img src={props.image} alt='Old computers, consoles and tapes' className='top3__article__image' />
         <div className='top3__article__info'>
            <h4 className='top3__article__info__number'>{props.number}</h4>
            <h3 className='top3__article__info__title'>{props.title}</h3>
            <p className='top3__article__info__text'>{props.text}</p>
         </div>
      </article>
   )
}