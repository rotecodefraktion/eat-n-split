import React, { useState } from "react";

const Bill = ({ friends, onUpdateFriend, activeFriend }) => {
  const name = friends.find((friend) => friend.id === activeFriend).name;
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [payer, setPayer] = useState("me");
  const friendExpense = bill - myExpense;

  const handleSplitbill = (e) => {
    e.preventDefault();
    const message =
      payer === "me"
        ? `Are you sure you want to split the bill and pay your friends expenses (${friendExpense} €)?`
        : `Are you sure you want to split the bill and let your friend pay your expenses (${myExpense} €)?`;

    if (!window.confirm(message)) return;

    const accountValue = friends.find(
      (friend) => friend.id === activeFriend
    ).account;

    onUpdateFriend(
      activeFriend,
      payer === "me" ? accountValue + friendExpense : accountValue - myExpense
    );
  };

  const handleSelectPayer = (e) => {
    setPayer((p) => e.target.value);
  };

  const handleChangeBill = (value) => {
    value = value.replace(/€/g, "");
    value = Number(value);
    if (Number(value) < Number(myExpense)) {
      alert(
        `Your expense € ${myExpense} cannot be higher than the bill € ${value}`
      );
      return;
    }
    setBill(value);
  };

  const handleMyExpense = (value) => {
    value = value.replace(/€/g, "");
    value = Number(value);
    if (Number(value) > Number(bill)) {
      alert(`Your expense € ${value} cannot be higher than the bill € ${bill}`);
      return;
    }
    setMyExpense(value);
  };

  return (
    <form
      className="form-split-bill"
      onSubmit={(event) => handleSplitbill(event)}
    >
      <h2>Split the bill with {name}</h2>
      <label htmlFor="billValue">💰 Bill Value</label>
      <input
        type="text"
        name="billValue"
        id="billValue"
        value={"€ " + bill.toString()}
        onChange={(e) => handleChangeBill(e.target.value)}
      />

      <label htmlFor="myexpense">🧍🏻‍♂️ Your expense</label>
      <input
        type="text"
        name="myExpense"
        value={"€ " + myExpense.toString()}
        disabled={bill * 1 > 0 ? false : true}
        onChange={(e) => handleMyExpense(e.target.value)}
      />

      <label htmlFor="friendsExpense">👩🏿‍🤝‍👨🏼 {name}'s expense</label>
      <input
        type="text"
        name="friendsExpense"
        readOnly={true}
        value={"€ " + friendExpense.toString()}
        disabled={true}
      />

      <label htmlFor="payer">﹩Who's paying the Bill</label>
      <select
        name="payer"
        value={payer}
        onChange={(p) => {
          handleSelectPayer(p);
        }}
      >
        <option value="me">Me</option>
        <option value="friend">{name}</option>
      </select>

      <button className="button" disabled={bill === 0}>
        Split Bill
      </button>
    </form>
  );
};

export default Bill;
