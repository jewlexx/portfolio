import presetEnv from "postcss-preset-env";
import cssnano from "cssnano";

const config = {
  plugins: [presetEnv(), cssnano],
};

export default config;
