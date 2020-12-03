import React, { useState } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { Typography, Grid, HeaderGhost } from 'mobile-styles';

import { i18N } from '../../../../CoreService';
import { styles } from './styles';
import {
  formatMoney2Numeral,
  numberToCurrencyIntl,
} from '../../../../helpers/number';
import { FixedBottomButtonView, MoneyInputMask } from '../../components';
import { SalaryAdvanceModule } from '../..';

interface Props {
  navigation: NavigationStackProp;
}

const ValueRequest = ({ navigation }: Props) => {
  const [value, setValue] = useState<string>('0');

  //TODO: Replace with real data when integrate with backend (BFF)
  const mockMinMaxValue = {
    min: 50,
    max: 5000,
  };

  const isNotBetweenMinAndMax = (num: number, min: number, max: number) =>
    num < min || num > max;
  const valueItsNotValid = (num: number) => !num || num === 0;

  const inputtedValueIsNotValid = (input: string) => {
    const num = formatMoney2Numeral(input);
    const { min, max } = mockMinMaxValue;
    return valueItsNotValid(num) || isNotBetweenMinAndMax(num, min, max);
  };

  const navigateToNextRoute = () => {
    navigation.navigate(
      SalaryAdvanceModule.routes.SALARY_ADVANCE_VALUE_PREVIEW_CONFIRMATION,
      {
        value: formatMoney2Numeral(value),
        month: 'outubro', // TODO: Add integration to select the correct month to pass
      },
    );
  };

  return (
    <FixedBottomButtonView
      disabled={inputtedValueIsNotValid(value)}
      loading={false}
      onPress={navigateToNextRoute}>
      <HeaderGhost
        headerTitle={i18N.t('salaryAdvance.header')}
        variantButton="transparent"
        variantFont="mockTokenHelveticaLabelRegular"
        onGoBack={() => navigation.goBack()}
      />
      <Grid p="spacing20px" pt="spacing40px">
        <Typography
          style={styles.title}
          color="neutral9"
          text={i18N.t('salaryAdvance.valueRequest.title')}
          variant="mockTokenHelveticaDisplayLight"
        />
        <Grid mt="spacing24px">
          <MoneyInputMask
            currency="BRL"
            value={value}
            onChangeText={(vl: string) => setValue(vl)}
          />
        </Grid>
        <Grid mt="spacing24px">
          <Typography
            color="neutral7"
            text={`Entre ${numberToCurrencyIntl(
              mockMinMaxValue.min,
            )} e ${numberToCurrencyIntl(mockMinMaxValue.max)} `}
            variant="mockTokenHelveticaParagraphTextSuportRegular"
          />
        </Grid>
      </Grid>
    </FixedBottomButtonView>
  );
};

export { ValueRequest };
