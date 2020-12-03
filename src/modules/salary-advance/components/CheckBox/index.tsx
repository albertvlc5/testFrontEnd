import React from 'react';
import { Box, Check } from './styles';

interface Props {
  value: boolean;
  onCheck: () => void;
}

const CheckBox = ({ value, onCheck }: Props) => {
  return (
    <Box onTouchEnd={onCheck} testID="box-id">
      <Check checked={value} testID="check-value-id" />
    </Box>
  );
};

export { CheckBox };
