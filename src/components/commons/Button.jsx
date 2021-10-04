import React from "react";

const Button = (props) => {
  const { 
    children, 
    disabled = false,
    type = "button",
    className = "",
    style = {},
    onClick = () => {} 
  } = props;

  return (
    <button style={style} className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;