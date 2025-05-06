
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const InputWithLabel = ({ id, label, ...props }) => {
  return (
    <div>
      {/* Le label est lié à l'input grâce à htmlFor = id */}
      <Label htmlFor={id}>{label}</Label>

      {/* L'input reçoit l’id + toutes les autres props passées dynamiquement */}
      <Input id={id} {...props} />
    </div>
  );
};

export default InputWithLabel;
