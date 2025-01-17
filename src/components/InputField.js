import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 5px 0 0 5px;
`;

const InputField = ({ type, placeholder, value, onChange, error }) => {
  return (
    <div>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={!!error}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default InputField;
