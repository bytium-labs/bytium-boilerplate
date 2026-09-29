const path = require("path");
const { createBytiumBuild } = require("@bytium-core/dev-utils");

module.exports = createBytiumBuild({
  target: "client",
  entry: path.resolve(__dirname, "index.ts"),
  outDir: path.resolve(__dirname, "../../dist/client"),
  alias: {
    "@client": __dirname,
  },
});
