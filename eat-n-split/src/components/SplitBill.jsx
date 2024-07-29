import React, { useState } from 'react';

function SplitBill({
  splitBill,
  onSplitBill,
  selectedFriend,
  onSelectedFriend,
}) {
  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [whoWillPay, setWhoWillPay] = useState('user');
  const balance = bill ? bill - expense : 0;

  const submitForm = e => {
    e.preventDefault();
    const newBalance = whoWillPay === 'user' ? expense : -balance;
    onSplitBill(newBalance);
    onSelectedFriend(selectedFriend);
    resetInput();
  };

  const resetInput = () => {
    setBill(0);
    setExpense(0);
    setWhoWillPay('user');
  };

  const isValueNaN = val => {
    return isNaN(val);
  };

  return (
    <div
      className={`card bg-white max-h-[25rem] shadow-xl w-full  transition-all duration-700 ease-in-out ${
        selectedFriend
          ? 'opacity-100 max-w-lg'
          : 'max-w-0 opacity-0 overflow-hidden'
      }`}
    >
      <form action="" onSubmit={submitForm}>
        <div className="card-body">
          <h1 className="card-title text-black text-2xl mb-5">
            Split a Bill with {selectedFriend || 'who? 🤔'}
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-black font-bold">💰 Bill Value</label>
              <input
                value={bill}
                onChange={e => {
                  isValueNaN(e.target.value)
                    ? ''
                    : setBill(Number(e.target.value));
                }}
                type="text"
                className="input text-black border-none  disabled:bg-slate-400 bg-slate-200 w-full max-w-32"
              />
            </div>
            <div className="flex justify-between">
              <label className="text-black font-bold">🧍🏻‍♂️ Your expense</label>
              <input
                value={expense}
                onChange={e =>
                  isValueNaN(e.target.value)
                    ? ''
                    : setExpense(Number(e.target.value))
                }
                type="text"
                className="input text-black border-none disabled:bg-slate-400 bg-slate-200 w-full max-w-32"
              />
            </div>
            <div className="flex justify-between">
              <label className="text-black font-bold">
                🙋🏻‍♂️ {`${selectedFriend}'s`} expense
              </label>
              <input
                type="number"
                value={balance}
                className="input text-black disabled:text-black disabled:bg-slate-400 border-none w-full max-w-32"
                disabled
              />
            </div>
            <div className="flex justify-between">
              <label className="text-black font-bold">
                🤑 Who is paying the bill?
              </label>
              <select
                value={whoWillPay}
                onChange={e => setWhoWillPay(e.target.value)}
                className="select border-none  disabled:bg-slate-400 text-black bg-slate-200 w-full max-w-32"
              >
                <option value={'user'}>You</option>
                <option value={'friend'}>Friend</option>
              </select>
            </div>
            <button type="submit" className="btn btn-error text-white">
              Split Bill
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SplitBill;
