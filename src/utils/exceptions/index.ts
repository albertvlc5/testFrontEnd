import { formatException } from '../logging';
import { EXCEPTIONS } from '../logging/constants';
import { TFormatException } from '../logging/interface';

export const requestErrorException = ({
  context,
  status,
  message,
  payload,
}: TFormatException) => {
  return formatException({
    exceptionName: EXCEPTIONS.REQUEST_ERROR_EXCEPTION.NAME,
    exceptionCode: EXCEPTIONS.REQUEST_ERROR_EXCEPTION.CODE,
    context: context,
    status: status,
    message: message,
    payload: payload,
  });
};
