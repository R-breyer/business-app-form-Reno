import React from 'react';
import styled from 'styled-components';
import { Briefcase, User } from 'lucide-react'; // ✅ Icônes Lucide

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${({ active }) => (active ? '#e65c00' : '#f5f5f5')};
  }

  svg {
    flex-shrink: 0;
  }
`;

// Nouvelle version avec icônes associées à chaque option
const optionsWithIcons = [
  {
    label: 'Merchant',
    value: 'merchant',
    icon: <Briefcase size={16} />
  },
  {
    label: 'Agent',
    value: 'agent',
    icon: <User size={16} />
  }
];

const ToggleButtonGroup = ({ name, value, onChange }) => {
  return (
    <Group>
      {optionsWithIcons.map((option) => (
        <Button
          key={option.value}
          type="button"
          active={value === option.value}
          onClick={() => onChange(name, option.value)}
        >
          {option.icon}
          {option.label}
        </Button>
      ))}
    </Group>
  );
};

export default ToggleButtonGroup;
