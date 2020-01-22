import chalk from "chalk";
import express from "express";
import path from "path";
import compression from "compression";
import fs from "fs";
import http from "http";
import https from "https";
import cors from "cors";

import errorHandler from "./middleware/errorHandler";
import ssr from "./middleware/ssr";

const app = express();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3200;
const protocol = process.env.PROTOCOL || 'HTTP';
let server;

if (protocol === 'HTTPS') {
  const sslOptions = {
    key: fs.readFileSync(path.join(process.cwd(), '.config', 'ssl', 'key.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), '.config', 'ssl', 'cert.pem')),
    requestCert: false,
    rejectUnauthorized: false
  };
  server = https.createServer(sslOptions, app);
} else {
  server = http.createServer(app);
}

app.use(cors());
app.use(errorHandler);

if (env === "production") {
  app.use(compression());
}

app.use(
  "/dist/client",
  express.static(path.resolve(process.cwd(), "dist", "client"))
);

app.get("/*", ssr);

server.listen(port, () => {
  const addr = `${protocol === 'HTTPS' ? 'https' : 'http'}://localhost:${port}`;
  process.stdout.write(
    `\n [${new Date().toISOString()}] ${chalk.green(
      "Server running:"
    )} ${chalk.blue(addr)} \n`
  );
});

export default app;
