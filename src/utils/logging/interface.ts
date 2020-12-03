import { ExceptionCode, ExceptionName } from './constants';

export type TFormatException = {
  exceptionName?: ExceptionName;
  exceptionCode?: ExceptionCode;
  context: string;
  status?: string | number;
  message?: string;
  payload?: {};
};
