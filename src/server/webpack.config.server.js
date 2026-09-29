const path = require("path");
const { createBytiumBuild } = require("@bytium-core/dev-utils");

module.exports = createBytiumBuild({
  target: "server",
  entry: path.resolve(__dirname, "index.ts"),
  outDir: path.resolve(__dirname, "../../dist/server"),
  alias: {
    "@server": __dirname,
  },
});
