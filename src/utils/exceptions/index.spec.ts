import { name, version } from '../../../package.json';
import { requestErrorException } from './';

describe('exceptions', () => {
  describe('requestErrorException', () => {
    describe('when a request fail', () => {
      it('return requestErrorException: (0002)', () => {
        expect(
          requestErrorException({
            context: 'Exception Test',
            status: undefined,
            message: 'Error',
            payload: { object: 'value' },
          }),
        ).toBe(
          `[requestErrorException: (0002)][${name} v${version}][Exception Test] Error: {"object":"value"} (status: undefined)`,
        );
      });
    });
  });
});
