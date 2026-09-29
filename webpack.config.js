const clientConfig = require("./src/client/webpack.config.client.js");
const serverConfig = require("./src/server/webpack.config.server.js");

module.exports = [clientConfig, serverConfig];
