import Button from "./Button";

const Friend = ({ friend, activeFriend, onSelect, onClose }) => {
  const accountStatus =
    friend.account === 0
      ? `You and ${friend.name} are even`
      : friend.account > 0
      ? `
  ${friend.name} owes you ${friend.account} €`
      : `You owe ${friend.name} ${friend.account} €`;

  const className =
    friend.account === 0 ? "" : friend.account > 0 ? "green" : "red";

  return (
    <li>
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name} />
      <p className={className}>{accountStatus}</p>
      {friend.id !== activeFriend ? (
        <Button id={friend.id} onClick={onSelect}>
          <p>Select</p>
        </Button>
      ) : (
        <Button onClick={onClose}>
          <p>Close</p>
        </Button>
      )}
    </li>
  );
};

export default Friend;
