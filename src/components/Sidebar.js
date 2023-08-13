import React from "react";
import { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";

const Sidebar = ({ friends, activeFriend, onSelect, onAdd, onClose }) => {
  const [addFriend, setAddFriend] = useState(false);

  const handleToggleAddFriend = () => {
    setAddFriend(!addFriend);
  };

  const handleNewFriend = (name, image) => {
    if (image === isNaN || image === "")
      image = "https://i.pravatar.cc/150?img=50";

    handleToggleAddFriend();
    onAdd(name, image);
  };

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelect={onSelect}
            onClose={onClose}
            activeFriend={activeFriend}
          />
        ))}
      </ul>
      {!addFriend && (
        <button className="button" onClick={handleToggleAddFriend}>
          Add Friend
        </button>
      )}
      {addFriend && (
        <AddFriend onAdd={handleNewFriend} onClose={handleToggleAddFriend} />
      )}
    </div>
  );
};

const AddFriend = ({ onAdd, onClose }) => {
  return (
    <>
      <form
        className="form-add-friend"
        onSubmit={(event) => {
          onAdd(event.target.name.value, event.target.imageurl.value);
        }}
      >
        <h2>Add a new friend</h2>
        <label htmlFor="name">👩🏿‍🤝‍👨🏼 Name</label>
        <input type="text" id="name" />
        <label htmlFor="image">👻 imageurl</label>
        <input type="url" id="imageurl" />
        <input className="button" type="submit" value="Add" />
      </form>
      <Button onClick={onClose}>
        <p>Close</p>
      </Button>
    </>
  );
};

export default Sidebar;
