# bytium-boilerplate

> A minimal client and server [Bytium](https://bytium.dev) resource for FiveM Enhanced. Clone it and start building.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D26-brightgreen.svg)](https://nodejs.org)

**bytium-boilerplate** is a ready to run starting point for a Bytium resource: a server module with a `/hello` command and a client module with a `/ping` command, wired up with dependency injection, modules, and decorator-driven handlers. Use it as the base for your own resource.

## Requirements

- A FiveM Enhanced server (the Node 26 / V8 server runtime).
- Node.js and a package manager on your machine, for installing packages and building.

## Getting started

1. Copy this folder into your server's `resources` directory (rename it to your resource name).
2. Install dependencies and build the bundle:

   ```bash
   npm install
   npm run build
   ```

3. Add the resource to your `server.cfg`:

   ```
   ensure bytium-boilerplate
   ```

4. Start your server and try it out:
   - Run `hello` in the server console. It logs `Hello, world!`. Run `hello Jakub` and it greets Jakub.
   - Run `/ping` in game. It logs `pong`.

## Building

```bash
npm run build     # build both bundles once
npm run watch     # rebuild on change
```

FiveM Enhanced resources are pre-built: you compile your TypeScript to `dist/` and ship the bundle. The server loads the built files, it does not build them for you.

## Documentation

Full guides, API reference, and recipes live at [docs.bytium.dev](https://docs.bytium.dev).

## License

[MIT](./LICENSE) © Jakub Michalski (lilabyte)
