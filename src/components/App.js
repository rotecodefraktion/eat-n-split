import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Bill from "./Bill";

function App() {
  const [activeFriend, setActiveFriend] = useState(null);
  const [friends, setFriends] = useState([
    {
      id: uuidv4(),
      name: "Sonja",
      account: 0,
      image: "https://i.pravatar.cc/150?img=49",
    },
    {
      id: uuidv4(),
      name: "Michaela",
      account: 10,
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      id: uuidv4(),
      name: "Sarah",
      account: -10,
      image: "https://faces3.b-cdn.net/Italy.png",
    },
  ]);

  const handleSelectFriend = (id) => {
    setActiveFriend(id);
  };

  const handleNewFriend = (name, image) => {
    //console.log(name, image);
    if (image === isNaN || image === "")
      image = "https://i.pravatar.cc/150?img=50";

    const newFriend = {
      id: uuidv4(),
      name: name,
      account: 0,
      image: image,
    };
    setFriends((friends) => [...friends, newFriend]);
    setActiveFriend(newFriend.id);
  };

  const handleCloseFriend = () => {
    setActiveFriend(null);
  };

  const handleUpdateFriend = (id, account) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === id) {
        return { ...friend, account: account };
      }
      return friend;
    });
    setFriends(updatedFriends);
  };

  return (
    <div className="app">
      <Sidebar
        friends={friends}
        activeFriend={activeFriend}
        onSelect={handleSelectFriend}
        onClose={handleCloseFriend}
        onAdd={handleNewFriend}
      />
      {activeFriend !== null && (
        <Bill
          friends={friends}
          onUpdateFriend={handleUpdateFriend}
          activeFriend={activeFriend}
        />
      )}
    </div>
  );
}

export default App;
