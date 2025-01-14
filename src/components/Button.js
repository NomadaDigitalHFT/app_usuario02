import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  margin: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
