import React from "react";

const Button = ({ id, onClick, children }) => {
  if (id === isNaN) {
    return (
      <button
        className="button"
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="button"
      onClick={() => {
        onClick(id);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
