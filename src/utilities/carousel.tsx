import { CarouselInterface } from '../interfaces/carouselInterface';
import { useState } from 'react';
import '../styles/carousel.scss'
import Slide from './slide';

function Carousel(props: CarouselInterface) {
    const [counterImg, setCounterImg] = useState(0)

    function prevImage(){
        if(counterImg !== 0){
            setCounterImg(counterImg - 1)
        }
    }
    function nextImage(){
        if(counterImg >= props.slideArray.length - 1){
            setCounterImg(0)
        }else{
            setCounterImg(counterImg + 1)
        }
    }

  return (
    <div className='carousel'>
      <div className='main-pic d-flex justify-content-center align-items-center gap-4'>
        {/* Slide Principale */}
        <i onClick={prevImage} className="fa-solid fa-arrow-left"></i>
            <Slide
                imageUrl={props.slideArray[counterImg].imageUrl}
                title={props.slideArray[counterImg].title}
                description={props.slideArray[counterImg].description}>
             </Slide>
        <i onClick={nextImage} className="fa-solid fa-arrow-right"></i>
      </div>
      
      {/* Carosello */}
      <div className='d-flex justify-content-center'>
      {props.slideArray.map((slide,index)=>(
        <Slide key={index}
               imageUrl={slide.imageUrl}
            >
        </Slide>
     ))}
      </div>

    </div>
  );
}

export default Carousel;