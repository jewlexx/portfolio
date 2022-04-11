require("ts-node").register({
  compilerOptions: {
    target: "ES6",
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    strictNullChecks: true,
    forceConsistentCasingInFileNames: true,
    noEmit: true,
    noUncheckedIndexedAccess: true,
    esModuleInterop: true,
    module: "CommonJS",
    resolveJsonModule: true,
    isolatedModules: true,
    incremental: true,
    downlevelIteration: true,
    sourceMap: false,
    inlineSourceMap: false,
  },
});

module.exports = require("./config/next.config").default;
