import { useState, useEffect } from 'react';

import { Field } from './models/Field';
import { FieldComponent, Counter, Emoticon, Timer } from './components';

import './App.css';

function App() {
  const totalMines = 40;

  const [field, setField] = useState(new Field(totalMines));
  const [mood, setMood] = useState('play');

  useEffect(() => {
    if (field.gameStatus === 2) setMood('lose');
    if (field.gameStatus === 3) setMood('win');
  }, [field]);

  function restart() {
    setField(new Field(totalMines));
  }

  return (
    <div className="App">
      <div className="upperBlock">
        <Counter count={field.remainingMines} />
        <Emoticon mood={mood} onClick={restart} />
        <Timer status={field.gameStatus} />
      </div>
      <FieldComponent field={field} setField={setField} setMood={setMood} />
    </div>
  );
}

export default App;
