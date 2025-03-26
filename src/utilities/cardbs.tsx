import { cardInterface } from '../interfaces/cardInterface.ts';
import '../styles/card.scss'

function Card(props: cardInterface) {
  return (
    <div className='card' 
      style={{backgroundColor: props.bgColor,
              color: props.color
      }}>
      <img src={props.image} />
      <div>
        <h4>{props.title}</h4>
        <p>
          {props.description}
        </p>
        <a href={props.link}>{props.linkTitle}</a>
      {/* creare componente pers. bottono e importarlo qui
       <button className='btn' onClick={props.onclick}>{props.btn}</button> */}
      </div>
    </div>
  );
}

export default Card;