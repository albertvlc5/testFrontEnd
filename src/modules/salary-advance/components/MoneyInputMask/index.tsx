import React from 'react';
import { Typography } from 'mobile-styles';
import { InputMask, InputBox } from './styles';

type maskType = 'BRL' | 'INTERNATIONAL';

interface Props {
  currency: maskType;
  value: string;
  onChangeText: (value: string) => void;
  onSubmit?: (value: any) => void;
}

export const MoneyInputMask = ({
  value,
  onChangeText,
  onSubmit,
  currency,
}: Props) => {
  const getCorrectUnit = (maskType: maskType) =>
    maskType === 'BRL' ? 'R$' : '$';

  return (
    <InputBox>
      <Typography
        text={getCorrectUnit(currency)}
        variant="mockTokenHelveticaDisplayLight"
        color="neutral5"
        style={{ fontSize: 32, paddingTop: 27, marginRight: 15 }}
      />
      <InputMask
        testID="input-mask-test-id"
        type="money"
        value={value}
        keyboardType="numeric"
        options={{
          unit: '',
          maskType: currency,
        }}
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
      />
    </InputBox>
  );
};
