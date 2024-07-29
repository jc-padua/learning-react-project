import { useEffect, useState } from 'react';
import './App.css';
const feedback = [
  {
    id: 'nahh',
    description: 'Dissatisfied (0%)',
    value: 0,
  },
  {
    id: 'okay',
    description: 'It was okay (5%)',
    value: 5,
  },
  {
    id: 'good',
    description: 'It was good (10%)',
    value: 10,
  },
  {
    id: "wth is this? it's so good",
    description: 'Absolutely amazing! 20%)',
    value: 20,
  },
];

function App() {
  return (
    <div className="container">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [tip, setTip] = useState({
    bill: 0,
    yourFeedback: 0,
    friendFeedback: 0,
  });

  function handleReset() {
    setTip({
      bill: 0,
      yourFeedback: 0,
      friendFeedback: 0,
    });
  }

  function handleTip(target, value) {
    setTip(prev => ({ ...prev, [target]: value }));
  }

  return (
    <>
      <BillInput bill={tip.bill} onTip={handleTip} />
      <FeedbackInput
        onTip={e => handleTip('yourFeedback', Number(e.target.value))}
        tip={tip.yourFeedback}
        feedback={feedback}
      >
        {'How did you like the service?'}
      </FeedbackInput>
      <FeedbackInput
        onTip={e => handleTip('friendFeedback', Number(e.target.value))}
        tip={tip.friendFeedback}
        feedback={feedback}
      >
        {'How did your friend like the service?'}
      </FeedbackInput>
      <TipResult tip={tip} />
      <Reset onReset={handleReset} />
    </>
  );
}

function BillInput({ bill, onTip }) {
  function handleBill(e) {
    onTip('bill', Number(e.target.value));
  }

  return (
    <div className="">
      <label>How much was the bill?</label>
      <input type="number" value={bill} onChange={handleBill} />
    </div>
  );
}

function FeedbackInput({ children, feedback, tip, onTip }) {
  return (
    <div className="">
      <label>{children}</label>
      <select value={tip} onChange={onTip}>
        {feedback.map(item => (
          <option key={item.id} value={item.value}>
            {item.description}
          </option>
        ))}
      </select>
    </div>
  );
}

function TipResult({ tip }) {
  const averageTip =
    tip.bill * ((tip.yourFeedback + tip.friendFeedback) / 2 / 100);
  const totalTip = tip.bill + averageTip;
  return (
    <>
      <p>
        You pay ${totalTip} (${tip.bill} + ${averageTip} tip)
      </p>
    </>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
