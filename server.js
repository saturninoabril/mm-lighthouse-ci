const { createServer } = require("@lhci/server");

require("dotenv").config();

const {
  PORT,
  LHCI_SERVER_DB_CONNECTION,
  LHCI_SERVER_DB_METHOD,
  LHCI_SERVER_DB_DIALECT,
} = process.env;

console.log("Starting server...");
createServer({
  port: PORT,
  storage: {
    storageMethod: LHCI_SERVER_DB_METHOD,
    sqlDialect: LHCI_SERVER_DB_DIALECT,
    sqlConnectionUrl: LHCI_SERVER_DB_CONNECTION,
    sequelizeOptions: {
      pool: {
        acquire: 30000,
      },
    },
  },
}).then(({ port }) =>
  console.log(`LHCI listening on http://localhost:${port}`)
);
