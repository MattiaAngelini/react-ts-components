import Card from 'react-bootstrap/Card';
import { cardInterface } from '../interfaces/cardInterface.ts';
import './cardBs.scss'

function CardBs(props: cardInterface) {
  return (
    <div className='card' 
      style={{backgroundColor: props.bgColor,
              color: props.color
      }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <a href={props.link}>{props.linkTitle}</a>
      {/* creare componente pers. bottono e importarlo qui
       <button className='btn' onClick={props.onclick}>{props.btn}</button> */}
      </Card.Body>
    </div>
  );
}

export default CardBs;