import React from "react";
import styled from "styled-components";

function Button({ name, icon, onClick, bg, bPadding, color, bRadius }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPadding,
        borderRadius: bRadius,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
`;

export default Button;
