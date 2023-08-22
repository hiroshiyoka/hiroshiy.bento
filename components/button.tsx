import React from "react";

const Button = ({
  text,
  secondaryText,
  color = "#070707",
}: {
  text: string;
  secondaryText?: string;
  color?: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <span>{text}</span>
      {secondaryText && <span>{secondaryText}</span>}
    </div>
  );
};

export default Button;
