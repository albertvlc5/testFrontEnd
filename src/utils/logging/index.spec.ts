import { name, version } from '../../../package.json';
import { formatException } from './';
import { EXCEPTIONS } from './constants';

const messageMockDefault = `[exceptionDefault: (0001)][${name} v${version}][Exception default] : {} (status: undefined)`;
const messageMock = `[requestErrorException: (0002)][${name} v${version}][Test Exception Mock] Error message: ${JSON.stringify(
  { data: {} },
)} (status: 500)`;

describe('formatException', () => {
  describe('when using default values', () => {
    it('returns formatted exception with default values', () => {
      expect(
        formatException({
          context: 'Exception default',
        }),
      ).toBe(messageMockDefault);
    });
  });
  describe('when not using default values', () => {
    it('returns formatted exception with custom values', () => {
      expect(
        formatException({
          exceptionName: EXCEPTIONS.REQUEST_ERROR_EXCEPTION.NAME,
          exceptionCode: EXCEPTIONS.REQUEST_ERROR_EXCEPTION.CODE,
          context: 'Test Exception Mock',
          status: '500',
          message: 'Error message',
          payload: { data: {} },
        }),
      ).toBe(messageMock);
    });
  });
});
