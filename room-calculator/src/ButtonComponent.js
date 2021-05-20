import React from "react";

const ButtonComponent = (props) => {
  return (
    <div className="btnscmp">
      <div>
        <img id={props.label} src={props.pic} alt={props.label} />
      </div>
      <div className="counters">
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
    </div>
  );
};
export default ButtonComponent;
