import React, { useState } from 'react';
import AddFriend from './AddFriend';
import Friend from './Friend';

function FriendsList({
  splitBill,
  selectedFriend,
  onSelectedFriend,
  onAddFriend,
  onDelete,
}) {
  const [willAddFriend, setWillAddFriend] = useState(false);

  const noFriendMessage = () => {
    return (
      <div className="card card-side bg-white hover:bg-red-100  shadow-xl w-full">
        <div className="card-body flex-row justify-between">
          <p className="text-black">I think it's time to make friend 😥</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-end flex-col gap-4 w-full max-w-lg">
      {splitBill.length === 0
        ? noFriendMessage()
        : splitBill.map(item => (
            <Friend
              key={item.id}
              splitBill={item}
              selectedFriend={selectedFriend}
              onSelectedFriend={onSelectedFriend}
              onDelete={onDelete}
            />
          ))}
      <AddFriend
        onAddFriend={onAddFriend}
        willAddFriend={willAddFriend}
        onWillAddFriend={setWillAddFriend}
      />
    </div>
  );
}

export default FriendsList;
