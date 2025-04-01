import { SlideModel } from '../models/slideModel';
import '../styles/slide.scss'

function Slide(props: SlideModel) {
  return (
    <div className='ms-container'>
        <div className='slide'>
          <img src={props.imageUrl} alt="" />
          <div className='description'>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
          </div>
       </div>
       {!props.isActive && <div className='shadow'></div>}
    </div>
  );
}

export default Slide;