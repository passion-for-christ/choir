const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        BACKEND_URL: 'http://localhost:80/api/v1',
      },
    };
  }

  return {
    env: {
      BACKEND_URL: 'http://localhost:80/api/v1',
    },
  };
};