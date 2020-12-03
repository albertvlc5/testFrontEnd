export enum ExceptionName {
  EXCEPTION_DEFAULT = 'exceptionDefault',
  REQUEST_ERROR_EXCEPTION = 'requestErrorException',
}

export enum ExceptionCode {
  EXCEPTION_DEFAULT = '0001',
  REQUEST_ERROR_EXCEPTION = '0002',
}

export const EXCEPTIONS = {
  EXCEPTION_DEFAULT: {
    NAME: ExceptionName.EXCEPTION_DEFAULT,
    CODE: ExceptionCode.EXCEPTION_DEFAULT,
  },
  REQUEST_ERROR_EXCEPTION: {
    NAME: ExceptionName.REQUEST_ERROR_EXCEPTION,
    CODE: ExceptionCode.REQUEST_ERROR_EXCEPTION,
  },
};
