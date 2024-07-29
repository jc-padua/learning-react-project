import { useState } from 'react';

import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      {/* <div className="">
        <div className="steps">
          <button onClick={() => setStep(prev => prev + 1)}>-</button>
          <p>Step: {step}</p>
          <button onClick={() => setStep(prev => prev - 1)}>+</button>
        </div>
        <div className="counts">
          <button onClick={() => setCount(prev => prev - step)}>-</button>
          <p>Count: {count}</p>
          <button onClick={() => setCount(prev => prev + step)}>+</button>
        </div>
        <p>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} ${
                count > 1 ? 'days' : 'day'
              } from today is ${date.toDateString()}`
            : `${count.toString().slice(1)} ${
                count < -1 ? 'days' : 'day'
              } ago was ${date.toDateString()}`}
        </p>
      </div> */}
      <div className="">
        <p>Step {step}</p>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={e => setStep(Number(e.target.value))}
        />
        <div className="counts">
          <button onClick={() => setCount(prev => prev - step)}>-</button>
          <input
            type="number"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <button onClick={() => setCount(prev => prev + step)}>+</button>
        </div>
        <p>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} ${
                count > 1 ? 'days' : 'day'
              } from today is ${date.toDateString()}`
            : `${count.toString().slice(1)} ${
                count < -1 ? 'days' : 'day'
              } ago was ${date.toDateString()}`}
        </p>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
