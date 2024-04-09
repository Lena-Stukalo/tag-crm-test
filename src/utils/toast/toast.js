import React from "react";
import { useTimeout } from "../../hooks/useTimeout";

export const Toast = (props) => {
  useTimeout(props.close, 5000);

  return (
    <div className="toast">
      <div  className="toast-btn-wrap">
        <button onClick={props.close} className="toast__close-btn">
          x
        </button>
      </div>
      <div className="toast__text">{props.children}</div>
    </div>
  );
};
