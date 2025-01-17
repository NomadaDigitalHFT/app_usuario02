import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: ${({ disabled }) => (disabled ? "#666" : "#fff")};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  margin: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={!disabled ? onClick : null} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;

