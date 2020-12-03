import Grid from 'mobile-styles/src/components/Grid';
import Typography from 'mobile-styles/src/components/Typography';
import React from 'react';

import { i18N } from '../../../../../../CoreService';
import { formatNumberByLocale } from '../../../../../../helpers/number';

interface Props {
  totalAmount: number;
}

export const Summary = ({ totalAmount }: Props) => {
  return (
    <>
      <Grid flexDirection={'row'} testID="summary-component-test-id">
        <Typography
          text={`${i18N.t(
            'ATWORK.HOME.SUMMARY.CURRENCY',
          )} ${formatNumberByLocale(totalAmount)}`}
          color={'primary4'}
          variant="mockTokenHelveticaHeadingH4Bold"
        />
      </Grid>
      <Typography
        text={i18N.t('ATWORK.HOME.SUMMARY.TEXT')}
        color="neutral8"
        variant="mockTokenHelveticaParagraphTextSuportRegular"
        numberOfLines={1}
      />
    </>
  );
};
