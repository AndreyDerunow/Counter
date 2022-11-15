import React, { useState } from "react";

const Counter = (props) => {
  const { value } = props;
  const color = value === 0 ? "bg-warning" : "bg-primary";
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += color;
    return classes;
  };

  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };
  const handleIncrement = () => {
    // setValue(value + 1);
  };
  const handleDecrement = () => {
    // setValue(value - 1);
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>

      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
