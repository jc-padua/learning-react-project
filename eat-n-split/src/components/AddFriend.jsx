import React, { useState } from 'react';

function AddFriend({ onAddFriend, willAddFriend, onWillAddFriend }) {
  const [newFriend, setNewFriend] = useState({
    id: 0,
    friendAvatar: '',
    name: '',
    balance: 0,
  });
  const [gender, setGender] = useState('');
  const randomId = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const handleAddNewFriend = (field, value) => {
    setNewFriend(prevData =>
      field === 'friendAvatar'
        ? {
            ...prevData,
            [field]: `https://avatar.iran.liara.run/public/${value}`,
          }
        : {
            ...prevData,
            [field]: value,
            id: randomId(),
          }
    );
  };

  const onSubmitFriend = e => {
    e.preventDefault();

    if (!newFriend.name || !newFriend.friendAvatar || gender === '') return 0;
    onAddFriend(newFriend);
    onWillAddFriend(prev => !prev);
    setNewFriend({
      id: 0,
      friendAvatar: '',
      name: '',
      balance: 0,
    });
    setGender('');
  };

  return (
    <div className="collapse bg-error w-full">
      <input
        type="checkbox"
        name="my-accordion-1"
        className="hover:cursor-pointer"
        checked={willAddFriend}
        onChange={() => onWillAddFriend(prev => !prev)}
      />
      <div className="collapse-title text-xl text-white font-medium">
        <p>Add Friend</p>
      </div>
      <div className="collapse-content text-black">
        <div className="card py-4 ">
          <form onSubmit={onSubmitFriend} className="flex flex-col gap-2">
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="" className="text-white font-bold">
                👨🏻 Friend Name
              </label>
              <input
                type="text"
                placeholder="Friend Name"
                value={newFriend.name}
                onChange={e => handleAddNewFriend('name', e.target.value)}
                className="input input-bordered bg-white w-full max-w-64"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="" className="text-white font-bold">
                ♂️♀️ Gender
              </label>
              <div className="">
                <select
                  className="select border-none w-full  disabled:bg-slate-400 text-black bg-slate-200 "
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={e => {
                    handleAddNewFriend('friendAvatar', e.target.value);
                    setGender(e.target.value);
                  }}
                >
                  <option></option>
                  <option value={'boy'}>Male</option>
                  <option value={'girl'}>Female</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <label htmlFor="" className="text-white font-bold">
                🖼️ Image URL
              </label>
              <input
                type="text"
                placeholder="Image URL"
                value={newFriend.friendAvatar}
                disabled
                className="input border-none disabled:bg-slate-300 disabled:text-slate-500 bg-white w-full max-w-64"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-warning w-full  max-w-64"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFriend;
