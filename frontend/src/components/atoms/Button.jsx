import styled from 'styled-components';

const Button = styled.button`
  background-color: #FF6600;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #e65c00;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
