import React from 'react';

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter(item => item.packed === true).length;
  const itemsPercentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {itemsPercentage === 100
          ? 'You got everything! Ready to go!'
          : `You have ${numItems} items on your list, and you already packed
        ${packedItems} (${itemsPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
