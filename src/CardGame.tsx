import { useEffect, useState } from 'react';

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

function CardGame() {
  const [cards, setCards] = useState<CardName[]>([]);
  const [previouslyPickedCards, setPreviouslyPickedCards] = useState<
    CardName[]
  >([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    setCards(shuffleInPlace([...cardNames]));
  }, [previouslyPickedCards]);

  function renderCards(cards: CardName[]) {
    return cards.map((cardName) => <Card cardName={cardName} />);
  }

  return <div className="card-game">{renderCards(cards)}</div>;
}

export default CardGame;
