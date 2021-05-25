/* eslint-disable no-console */
const express = require("express");
const chalk = require("chalk");
const next = require("next");
const routes = require("./routes");
const RedirectsMiddleware = require("./middlewares/redirects");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // Middlewares
  server.use(RedirectsMiddleware);

  // Páginas
  server.get("*", handler);

  // server
  server.listen(process.env.PORT);

  if (dev) {
    console.info(
      `ecommerce is running at: ${chalk.underline(
        `http://localhost:${process.env.PORT}/games/1`,
      )}`,
    );
  } else {
    console.info(`ecommerce executando na porta ${process.env.PORT}`);
  }
});
