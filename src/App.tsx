import React, { ReactElement } from 'react';
import './App.css';
import CardGame from './CardGame';

function App(): ReactElement {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Memory Game</h1>
        <p>
          Get a point for clicking on a new image, but don't click on any more
          than once!
        </p>
      </header>
      <CardGame />
    </div>
  );
}

export default App;
