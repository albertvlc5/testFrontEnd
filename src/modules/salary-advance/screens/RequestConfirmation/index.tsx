import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { Grid, Typography, SvgIcon } from 'mobile-styles';

import { i18N } from '../../../../CoreService';
import { NeutralSquareButton } from '../../components';
import { BottomBox, StickToBottom, CheckIconBox } from './styles';
import { SalaryAdvanceModule } from '../..';

interface Props {
  navigation: NavigationStackProp;
}

const RequestConfirmation = ({ navigation }: Props) => {
  const navigateToRoute = () => {
    navigation.navigate(
      SalaryAdvanceModule.routes.SALARY_ADVANCE_VALUE_REQUEST,
    );
  };

  return (
    <>
      <Grid m="spacing20px">
        <Grid mb="spacing64px" mt="spacing80px">
          <CheckIconBox>
            <SvgIcon size={24} name="check" color="#11BB77" />
          </CheckIconBox>
        </Grid>
        <Typography
          color="neutral9"
          variant="mockTokenHelveticaHeadingH7Light"
          text={i18N.t('salaryAdvance.requestConfirmation.title')}
          style={{ fontSize: 26 }}
        />
        <Typography
          color="neutral9"
          variant="mockTokenHelveticaDisplayRegular"
          text={i18N.t('salaryAdvance.requestConfirmation.subtitle')}
          style={{
            marginTop: 16,
            lineHeight: 24,
            letterSpacing: 0.3,
            width: 320,
          }}
        />
      </Grid>
      <BottomBox>
        <StickToBottom>
          <NeutralSquareButton
            testId="confirmation-btn-id"
            label={i18N.t('salaryAdvance.requestConfirmation.btn')}
            onPress={navigateToRoute}
          />
        </StickToBottom>
      </BottomBox>
    </>
  );
};

export { RequestConfirmation };
