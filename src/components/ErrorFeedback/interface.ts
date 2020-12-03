import ERRORS from '../../constants/errors';

export type TErrorType =
  | ERRORS.NO_INTERNET
  | ERRORS.NO_SERVICE
  | string
  | null
  | undefined;

export interface IErrorFeedback {
  errorType?: TErrorType;
  onTryAgainPress: () => void;
  testID?: string;
}

export interface IIcon {
  errorType?: TErrorType;
}
