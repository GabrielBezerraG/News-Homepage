import './Top3.css';
import pcImage from '../../images/image-retro-pcs.jpg';
import laptopImage from '../../images/image-top-laptops.jpg';
import gamingImage from '../../images/image-gaming-growth.jpg';
import Top3Article from '../Top3Article/Top3Article';

const articlesData = [
   {image: pcImage,
   number: '01',
   title: 'Reviving Retro PCs',
   text: 'What happens when old PCs are given modern upgrades?'
   },
   {image: laptopImage,
   number: '02',
   title: 'Top 10 Laptops of 2022',
   text: 'Our best picks for various needs and budgets.'
   },
   {image: gamingImage,
   number: '03',
   title: 'The Growth of Gaming',
   text: 'How the pandemic has sparked fresh opportunities.'
   }
]

export default function Top3() {
   return (
      <section className='top3'>
         {articlesData.map( (item, index) => {
            return <Top3Article 
               image={item.image} 
               number={item.number} 
               title={item.title} 
               text={item.text} 
               key={index} 
            />
         } )}
      </section>
   )
}