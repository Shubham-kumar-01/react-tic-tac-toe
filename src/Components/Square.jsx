import React from "react";

const Square = (props) => {
  return (
    <div
    onClick={props.onClick}
      className="square"
      style={{
        border: "1px solid aqua",
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        borderRadius:"10px",
        margin:"3px",
        fontSize:"45px",
        color:"gray"
      }}
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
