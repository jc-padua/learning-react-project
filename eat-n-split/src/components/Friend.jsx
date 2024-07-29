import React from 'react';

function Friend({ splitBill, selectedFriend, onSelectedFriend, onDelete }) {
  const { friendAvatar, name, balance } = splitBill;

  const handleDelete = name => {
    const deleteFriend = window.confirm(
      `Are you sure you want to delete ${name} in your friend list?`
    );

    if (deleteFriend) {
      onDelete(name);
      onSelectedFriend('');
    }
  };
  return (
    <div className="card card-side bg-white hover:bg-red-100  p-4 shadow-xl w-full">
      <figure>
        <img src={friendAvatar} className="w-20 " alt="Movie" />
      </figure>
      <div className="card-body flex-row justify-between">
        <div className="">
          <h2 className="card-title text-black font-bold">{name}</h2>
          {balance < 0 && (
            <p className="font-semibold text-red-500">
              {`You owe ${name} $${Math.abs(balance)}`}
            </p>
          )}
          {balance === 0 && (
            <p className="font-semibold">{`You and ${name} is even`}</p>
          )}
          {balance > 0 && (
            <p className="font-semibold text-green-500">
              {`${name} owes you $${Math.abs(balance)}`}
            </p>
          )}
        </div>
        <div className="card-actions items-center">
          <button
            onClick={() => onSelectedFriend(name)}
            className="btn btn-error font-bold"
          >
            {selectedFriend === name ? 'Close' : 'Select'}
          </button>
          <button
            onClick={() => handleDelete(name)}
            className="btn btn-ghost hover:outline-red-600 hover:outline font-bold"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default Friend;
