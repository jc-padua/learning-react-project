import './App.css';
import Accordion from './components/Accordion';
import faqs from './faqs.js';

function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

export default App;
