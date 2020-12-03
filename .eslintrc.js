const config = require('mobile-dev-tools/eslint-config');

module.exports = {
  ...config,
  "globals": { "fetchMock": false }
};
