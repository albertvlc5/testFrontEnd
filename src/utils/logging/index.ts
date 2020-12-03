import { name, version } from '../../../package.json';
import { EXCEPTIONS } from './constants';
import { TFormatException } from './interface';

export const formatException = ({
  exceptionName = EXCEPTIONS.EXCEPTION_DEFAULT.NAME,
  exceptionCode = EXCEPTIONS.EXCEPTION_DEFAULT.CODE,
  context,
  status = 'undefined',
  message = '',
  payload = {},
}: TFormatException) => {
  return `[${exceptionName}: (${exceptionCode})][${name} v${version}][${context}] ${message}: ${JSON.stringify(
    payload,
  )} (status: ${status})`;
};

export default {
  formatException,
};
