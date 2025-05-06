import React, { useState } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import { Eye, EyeOff } from 'lucide-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const PasswordInput = ({ id, label, value, onChange, name, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Wrapper>
        <Input
          id={id}
          name={name}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <ToggleButton type="button" onClick={() => setShow(!show)}>
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </ToggleButton>
      </Wrapper>
    </div>
  );
};

export default PasswordInput;
