import React from 'react';
import { useState } from 'react';
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            key={item.title}
            number={index}
            title={item.title}
          >
            {item.text} 👶🏻
          </AccordionItem>
        );
      })}
    </div>
  );
}

function AccordionItem({ title, number, curOpen, onOpen, children }) {
  const isOpen = number == curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : number);
  }
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && (
        <div className="content-box">
          <ul>{children}</ul>
        </div>
      )}
    </div>
  );
}

export default Accordion;
