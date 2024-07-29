import React, { useState } from 'react';

function Form({ onAddItems }) {
  const [itemList, setItemList] = useState({
    description: '',
    quantity: 1,
  });

  const handleItemList = (key, value) => {
    setItemList(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!itemList.description) return;
    const newItem = { id: Date.now(), ...itemList, packed: false };
    onAddItems(newItem);
    resetInputs();
  };

  const resetInputs = () => {
    setItemList({ description: '', quantity: 1 });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={itemList.quantity}
        onChange={choice => handleItemList('quantity', choice.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemList.description}
        onChange={e => handleItemList('description', e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
