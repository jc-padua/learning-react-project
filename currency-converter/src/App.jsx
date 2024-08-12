import { useEffect, useState } from 'react';
import './App.css';

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [amount, setAmount] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('EUR');
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchConversion = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${firstCurrency}&to=${secondCurrency}`
        );
        const convertedValue = await res.json();
        setValue(
          convertedValue.rates === undefined
            ? amount
            : Object.values(convertedValue.rates)
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (amount <= 0) return;

    fetchConversion();
  }, [amount, firstCurrency, secondCurrency]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={firstCurrency}
        onChange={e => setFirstCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secondCurrency}
        onChange={e => setSecondCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
      {isLoading ? (
        <p>Converting...</p>
      ) : (
        <p>
          {value} {secondCurrency}
        </p>
      )}
    </div>
  );
}

export default App;
