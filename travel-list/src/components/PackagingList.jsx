import React, { useState } from 'react';
import Item from './Item';

function PackagingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSorBy] = useState('input');

  let sortedItem;

  if (sortBy === 'input') sortedItem = items;
  if (sortBy === 'description')
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map(item => {
          return (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={e => setSorBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackagingList;
