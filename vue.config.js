/**
 * DOC: https://cli.vuejs.org/config/#vue-config-js
 */
const routerBase = process.env.BASE_DIR
  ? {
      publicPath: process.env.BASE_DIR
    }
  : {};
module.exports = {
  ...routerBase,
  outputDir: "dist"
};
