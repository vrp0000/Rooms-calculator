import React from "react";

const ButtonComponent = (props) => {
  /* disabled={props.value <= 1 && props.label === "Rooms" ? true : false} */
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
          disabled={props.disableminus}
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
          disabled={props.disableplus}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ButtonComponent;
