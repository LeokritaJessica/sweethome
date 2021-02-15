//Import dotEnv
require("dotenv").config();

//Import server.js
const server = require("./src/server");

//dotEnv
const { PORT, NODE_ENV } = process.env;

//start server
server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT} and use ${NODE_ENV}`);
});
