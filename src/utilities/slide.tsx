import { SlideModel } from '../models/slideModel';
import '../styles/slide.scss'

function Slide(props: SlideModel) {
  return (
    <div className='slide'>
        <img src={props.imageUrl} alt="" />
        <div>{props.title}</div>
        <p>{props.description}</p>
    </div>
  );
}

export default Slide;