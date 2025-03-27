import {heroInterface} from '../interfaces/heroInterface.ts'
import '../styles/hero.scss'
import Btn from '../utilities/btn.tsx';

function Hero(props: heroInterface) {
  return (
   <section style={{backgroundColor: props.bgColor}} 
            className='hero'>

    {!props.video && 
        <div style={{color: props.textColor}} className='container-main'>
            <div >
                <img src={props.mediaUrl} alt="" /> 
                <div className='container-text text-center'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    {props.button && <Btn {...props.button} />} 
                </div>
            </div>
        </div>
    }

    {props.video && 
            <div style={{color: props.textColor}} className='container-main'>
                <div>
                    <video autoPlay muted >
                        <source src={props.mediaUrl}  type="video/mp4"/>
                    </video> 
                    <div className='container-text text-center'>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        {props.button && <Btn {...props.button} />} 
                    </div>
                </div>
            </div>
        }
   </section>
  );
}

export default Hero;