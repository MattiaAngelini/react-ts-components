import { CarouselInterface } from '../interfaces/carouselInterface';
import { useState } from 'react';
import '../styles/carousel.scss'
import Slide from './slide';
import { SlideModel } from '../models/slideModel';

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
        <div className='carousel container'>
            <div className='main-pic d-flex justify-content-center align-items-center gap-4'>
            
                {/* Slide Principale */}
                <i onClick={prevImage} className="fa-solid fa-arrow-left"></i>
                    <Slide
                        imageUrl={props.slideArray[counterImg].imageUrl}
                        title={props.slideArray[counterImg].title}
                        description={props.slideArray[counterImg].getShortDescription()}
                        id={props.slideArray[counterImg].id}
                        isActive={true} 
                        >
                    </Slide>
                <i onClick={nextImage} className="fa-solid fa-arrow-right"></i>
            </div>
            
            {/* Carosello */}
            <div className='d-flex justify-content-center'>
                {props.slideArray.map((slide: SlideModel ,index: number)=>(
                    <Slide 
                        title=''
                        description=''
                        key={index}
                        imageUrl={slide.imageUrl}
                        id={slide.id}
                        isActive={counterImg === index} 
                    >
                    </Slide>
                ))}
            </div>
        </div>
    );
}

export default Carousel;