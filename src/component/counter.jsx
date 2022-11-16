import React from "react";

const Counter = ({ name, onIncrement, onDecrement, onDelete, id, value }) => {
  const color = value === 0 ? "bg-warning" : "bg-primary";
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += color;
    return classes;
  };

  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };

  return (
    <div>
      <span>{name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onIncrement(id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onDecrement(id)}
      >
        -
      </button>

      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
