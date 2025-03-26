import { CardInterface } from '../interfaces/cardInterface.ts';
import '../styles/card.scss'
import Btn from './btn.tsx';

function Card(props: CardInterface) {
  return (
    <div className='card' 
      style={{backgroundColor: props.bgColor,
              color: props.color
      }}>
      <img src={props.image} />
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        {/* se props button della card è true:  renderizza componente Btn. 
        con metodo spread passiamo come props 'button' dell'interfaccia card,
        che è l'interfaccia del bottone */}
        {props.button && <Btn {...props.button} />} 
      </div>
    </div>
  );
}

export default Card;