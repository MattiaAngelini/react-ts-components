import { CarouselInterface } from '../interfaces/carouselInterface';
import '../styles/carousel.scss'
import Slide
 from './slide';

function Carousel(props: CarouselInterface) {
  return (
    <div className='carousel'>
     
      <div className='main-pic d-flex justify-content-center'>
      <span>sx</span>
        <img src={props.urlMainImage} alt="" /> 
        <span>dx</span>
      </div>
      
      <div className='d-flex justify-content-center'>
      {props.slideArray.map((slide,index)=>(
        <Slide key={index}
               imageUrl={slide.imageUrl}
               title={slide.title}
               description={slide.description}>
        </Slide>
     ))}
      </div>
    </div>
  );
}

export default Carousel;