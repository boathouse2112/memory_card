import { ReactElement, useEffect, useState } from 'react';
import Card from './Card';

const cardNames = [
  'daisy',
  'glasses',
  'luigi',
  'mario',
  'peach',
  'rosalina',
  'shyGuy',
  'toad',
  'toadette',
  'waluigi',
  'wario',
  'yoshi',
] as const;

type CardName = typeof cardNames[number];

const shuffleInPlace = function <T>(array: Array<T>): Array<T> {
  for (let idx = array.length - 1; idx > 0; idx--) {
    const newIdx = Math.floor(Math.random() * (idx + 1));
    [array[idx], array[newIdx]] = [array[newIdx], array[idx]];
  }

  return array;
};

function CardGame(): ReactElement {
  const [cards, setCards] = useState<CardName[]>([]);
  const [previouslyPickedCards, setPreviouslyPickedCards] = useState<
    CardName[]
  >([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    setCards(shuffleInPlace([...cardNames]));
  }, [previouslyPickedCards]);

  function renderCards(cards: CardName[]): ReactElement {
    const cardElements = cards.map((cardName) => (
      <Card key={cardName} cardName={cardName} handleClick={handleCardClick} />
    ));

    return <div className="cards">{cardElements}</div>;
  }

  function handleCardClick(cardName: CardName): void {
    if (previouslyPickedCards.includes(cardName)) {
      // Player loses. Set top score, reset current score, restart game.
      setTopScore(Math.max(currentScore, topScore));
      setCurrentScore(0);
      setPreviouslyPickedCards([]);
    } else {
      // Game continues. Current score += 1, previouslyPickedCards += cardName
      setPreviouslyPickedCards([...previouslyPickedCards, cardName]);
      setCurrentScore(currentScore + 1);
    }
  }

  return (
    <div className="card-game">
      <div>Current Score: {currentScore}</div>
      <div>Top Score: {topScore}</div>
      {renderCards(cards)}
    </div>
  );
}

export type { CardName };
export default CardGame;
