require('ts-node').register({
  compilerOptions: {
    target: 'ES6',
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    strictNullChecks: true,
    forceConsistentCasingInFileNames: true,
    noEmit: true,
    noUncheckedIndexedAccess: true,
    esModuleInterop: true,
    module: 'CommonJS',
    resolveJsonModule: true,
    isolatedModules: true,
    incremental: true,
    downlevelIteration: true,
    sourceMap: false,
    inlineSourceMap: false,
  },
});

const eslint = require('./eslint.config').default;
const prettier = require('./prettier.config').default;
const next = require('./next.config').default;

module.exports = {
  eslint,
  prettier,
  next,
};
