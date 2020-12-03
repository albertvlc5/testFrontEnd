/**
 * @format
 */

import { moduleKey } from '../module';

describe('Module File: ', () => {
  describe('- ModuleKey', () => {
    it('should be the same', () => {
      expect(moduleKey).toEqual('AtWork_ModuleName');
    });
  });
});
