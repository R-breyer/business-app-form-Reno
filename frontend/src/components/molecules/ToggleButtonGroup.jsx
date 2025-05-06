import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid ${({ active }) => (active ? '#FF6600' : '#ccc')};
  background-color: ${({ active }) => (active ? '#FF6600' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? '#e65c00' : '#f5f5f5')};
  }
`;

const ToggleButtonGroup = ({ name, options, value, onChange }) => {
  return (
    <Group>
      {options.map((option) => (
        <Button
          key={option.value}
          type="button"
          active={value === option.value}
          onClick={() => onChange(name, option.value)}
        >
          {option.label}
        </Button>
      ))}
    </Group>
  );
};

export default ToggleButtonGroup;
