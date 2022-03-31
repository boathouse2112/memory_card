import { ReactElement } from 'react';
import { CardName } from './CardGame';

function Card(props: {
  cardName: CardName;
  handleClick(cardName: string): void;
}): ReactElement {
  return (
    <div className="card" onClick={() => props.handleClick(props.cardName)}>
      <img src={`/matching_images/${props.cardName}.png`}></img>
    </div>
  );
}

export default Card;
