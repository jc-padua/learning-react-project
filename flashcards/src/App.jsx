import { useState } from 'react';
import './App.css';
import questions from './data.js';

function App() {
  const [selectedID, setSelectedID] = useState(null);

  const handleClick = id => {
    setSelectedID(id !== selectedID ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map(item => (
        <div
          key={item.id}
          className={item.id === selectedID ? 'selected' : ''}
          onClick={() => handleClick(item.id)}
        >
          <p>{item.id === selectedID ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
