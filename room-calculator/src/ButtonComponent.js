import React from "react";

const ButtonComponent = (props) => {
  return (
    <div className="btnscmp">
      <div>
        <p id={props.label}>{props.label}</p>
      </div>
      <div>
        <button
          className="bttns minus"
          id={props.label}
          onClick={props.decrement}
        >
          -
        </button>
      </div>
      <div>{props.value}</div>
      <div>
        <button
          id={props.label}
          className="bttns plus"
          onClick={props.increment}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ButtonComponent;
