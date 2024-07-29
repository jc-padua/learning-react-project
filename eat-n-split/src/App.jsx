import { useEffect, useState } from 'react';
import './App.css';
import SplitBill from './components/SplitBill';
import FriendsList from './components/FriendsList';

function App() {
  const [splitBill, setSplitBill] = useState([
    {
      id: 123,
      friendAvatar: 'https://avatar.iran.liara.run/public/1',
      name: 'Clark',
      balance: 0,
    },
    {
      id: 213,
      friendAvatar: 'https://avatar.iran.liara.run/public/2',
      name: 'John',
      balance: 0,
    },
  ]);

  const [selectedFriend, setSelectedFriend] = useState('');

  const handleSplitBill = value => {
    setSplitBill(prev => {
      const prevData = prev.map(friend =>
        friend.name === selectedFriend
          ? { ...friend, balance: friend.balance + value }
          : friend
      );
      return prevData;
    });
  };

  const handleSelectedFriend = friend => {
    setSelectedFriend(prevFriend => (prevFriend !== friend ? friend : ''));
  };

  const handleAddFriend = newFriend => {
    setSplitBill([...splitBill, newFriend]);
  };

  const handleDeleteFriend = friend => {
    setSplitBill(prev => prev.filter(item => item.name !== friend));
  };

  console.log(splitBill);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4 w-full items-center lg:item justify-center lg:flex-row">
        <FriendsList
          splitBill={splitBill}
          selectedFriend={selectedFriend}
          onSelectedFriend={handleSelectedFriend}
          onAddFriend={handleAddFriend}
          onDelete={handleDeleteFriend}
        />
        <SplitBill
          splitBill={splitBill}
          onSplitBill={handleSplitBill}
          selectedFriend={selectedFriend}
          onSelectedFriend={handleSelectedFriend}
        />
      </div>
    </div>
  );
}

export default App;
