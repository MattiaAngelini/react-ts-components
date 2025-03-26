import { BtnInterface } from '../interfaces/btnInterface.ts';

function Btn(props: BtnInterface) {
  return (
    <button 
      style={{
        backgroundColor: props.bgColor, 
        color: props.color,
        width: props.width,
        padding: props.padding
      }} 
      className={props.className || ''}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Btn;