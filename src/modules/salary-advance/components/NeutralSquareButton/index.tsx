import React from 'react';
import { PrimaryButton } from 'mobile-styles';

import { styles } from './styles';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  testId?: string;
}

const NeutralSquareButton = ({ label, disabled, testId, onPress }: Props) => {
  return (
    <PrimaryButton
      isDisabled={disabled}
      label={label}
      onPress={onPress}
      testID={testId}
      buttonStyle={!disabled ? styles.button : styles.buttonDisabled}
      labelStyle={!disabled ? styles.buttonLabel : styles.buttonLabelDisabled}
    />
  );
};

export { NeutralSquareButton };
