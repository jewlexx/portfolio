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
    isolatedModules: false,
    incremental: true,
    downlevelIteration: true,
    sourceMap: false,
    inlineSourceMap: false,
  },
});

const next = require('./next.config').default;

module.exports = {
  next,
};
