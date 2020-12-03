import { Typography } from 'mobile-styles';
import React from 'react';
import ERRORS from '../../constants/errors';
import { i18N } from '../../CoreService';
import { NoNetworkIcon, NoServiceIcon } from '../Icon';
import { IErrorFeedback, IIcon, TErrorType } from './interface';
import { Button, Description, Title, Wrapper } from './styles';

const getTitle = (errorType: TErrorType) => {
  if (errorType && errorType === ERRORS.NO_INTERNET) {
    return i18N.t('ERROR_FEEDBACK.NO_INTERNET.TITLE');
  }
  return i18N.t('ERROR_FEEDBACK.NO_SERVICE.TITLE');
};

const getDescription = (errorType: TErrorType) => {
  if (errorType && errorType === ERRORS.NO_INTERNET) {
    return i18N.t('ERROR_FEEDBACK.NO_INTERNET.DESCRIPTION');
  }
  return i18N.t('ERROR_FEEDBACK.NO_SERVICE.DESCRIPTION');
};

const Icon = ({ errorType }: IIcon) => {
  if (errorType && errorType === ERRORS.NO_INTERNET) {
    return <NoNetworkIcon />;
  }
  return <NoServiceIcon />;
};

export const ErrorFeedback = ({
  errorType,
  onTryAgainPress,
  testID,
}: IErrorFeedback) => (
  <>
    <Wrapper testID={testID}>
      <Icon errorType={errorType} />
      <Title
        text={getTitle(errorType)}
        variant="mockTokenHelveticaParagraphTextBold"
        color="neutral8"
        textAlign="center"
        testID="title"
      />
      <Description
        text={getDescription(errorType)}
        variant="mockTokenHelveticaParagraphTextRegular"
        color="neutral5"
        textAlign="center"
        testID="description"
      />
      <Button onPress={onTryAgainPress} testID="tryAgainButton">
        <Typography
          text={i18N.t('ERROR_FEEDBACK.TRY_AGAIN.BUTTON_LABEL')}
          variant="mockTokenHelveticaDisplayMedium"
          color="primary3"
          textAlign="center"
        />
      </Button>
    </Wrapper>
  </>
);
