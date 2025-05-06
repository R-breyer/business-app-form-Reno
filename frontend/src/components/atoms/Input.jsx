import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 4px;
  margin-bottom: 12px;

  &:focus {
    border-color: #FF6600;
    outline: none;
  }
`;

export default Input;
