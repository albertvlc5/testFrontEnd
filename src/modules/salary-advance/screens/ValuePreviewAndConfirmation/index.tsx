import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Typography, HeaderGhost, Grid } from 'mobile-styles';

import { Wrapper, CustomTypograhpy, BottomBox, StickToBottom } from './styles';
import { i18N } from '../../../../CoreService';
import { ActionSheetModal } from '../../components';
import { numberToCurrencyIntl } from '../../../../helpers/number';
import { SalaryAdvanceModule } from '../..';
import { NeutralSquareButton, CheckBox } from '../../components';

interface RouteParams {
  value: number;
  month: string;
}
interface Props {
  navigation: NavigationStackProp<RouteParams>;
}

const ValuePreviewAndConfirmation = ({ navigation }: Props) => {
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(false);
  const value = navigation.getParam('value');
  const month = navigation.getParam('month');
  const navigatoToRoute = () => {
    setCheck(false);
    navigation.navigate(
      SalaryAdvanceModule.routes.SALARY_ADVANCE_REQUEST_CONFIRMATION,
    );
  };
  return (
    <>
      <HeaderGhost
        headerTitle={i18N.t('salaryAdvance.header')}
        variantButton="transparent"
        variantFont="mockTokenHelveticaLabelRegular"
        onGoBack={() => navigation.goBack()}
      />
      <Wrapper>
        <CustomTypograhpy>
          {i18N.t('salaryAdvance.valuePreviewConfirmation.main.a')}
          <CustomTypograhpy primaryColor>
            {` ${numberToCurrencyIntl(value)} `}
          </CustomTypograhpy>
          {i18N.t('salaryAdvance.valuePreviewConfirmation.main.b')}
          {` ${month}`}
        </CustomTypograhpy>
        <Grid mt="spacing48px">
          <Typography
            text={i18N.t(
              'salaryAdvance.valuePreviewConfirmation.noCostInterestFree',
            )}
            color="neutral7"
            variant="mockTokenHelveticaDisplayMedium"
          />
          <Grid mt="spacing10px">
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Typography
                textAlign="left"
                text={i18N.t(
                  'salaryAdvance.valuePreviewConfirmation.understandCost',
                )}
                color="primary3"
                variant="mockTokenHelveticaDisplayMedium"
              />
            </TouchableOpacity>
          </Grid>
        </Grid>
      </Wrapper>
      <BottomBox>
        <StickToBottom>
          <Grid flexDirection="row">
            <CheckBox value={check} onCheck={() => setCheck(!check)} />
            <Grid flexDirection="column" ml="spacing12px">
              <Typography
                variant="mockTokenHelveticaDisplayMedium"
                color="neutral9"
                text={i18N.t(
                  'salaryAdvance.valuePreviewConfirmation.contract.a',
                )}
              />
              <Typography
                variant="mockTokenHelveticaDisplayMedium"
                color="primary3"
                text={i18N.t(
                  'salaryAdvance.valuePreviewConfirmation.contract.b',
                )}
                onPress={() => console.log('Open contract')}
              />
            </Grid>
          </Grid>
          <NeutralSquareButton
            disabled={!check}
            label={i18N.t('salaryAdvance.valuePreviewConfirmation.btnFinish')}
            onPress={navigatoToRoute}
          />
        </StickToBottom>
      </BottomBox>
      <ActionSheetModal visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export { ValuePreviewAndConfirmation };
