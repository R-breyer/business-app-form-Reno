import React from 'react';
import Label from '../atoms/Label';
import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  margin-top: 4px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    border-color: #FF6600;
    outline: none;
  }
`;

const SelectWithLabel = ({ id, label, name, value, onChange, options }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} name={name} value={value} onChange={onChange}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectWithLabel;
