import React from "react";

const WhiteBox = ({ top, left, width, height }) => {
  const boxStyle = {
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    marginTop: `${top}%`,
    marginLeft: `${left}%`,
    width: `${width}vw`,
    height: `${height}vw`,
  };
  return <div style={boxStyle} />;
};

export default WhiteBox;
