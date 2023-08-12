const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(port, "0.0.0.0", () => {
    console.log("Server listening at port:", port); // eslint-disable-line no-console
  });
});
