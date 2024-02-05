import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 12px;
  transition: all 0.2s;
  padding: 10px 14px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  outline: none;
  border: none;
  cursor: pointer;
`;
export const Input = styled.input`
  font-size: 14px;
  border: 1px solid gray;
  padding: 10px 14px;

  transition: all 0.2s;
  &:focus {
    background-color: lightgrey;
    outline: none;
  }
`;
