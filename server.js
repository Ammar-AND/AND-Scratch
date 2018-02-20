


const serve = require('serve');
require('dotenv').config();

console.log(process.env.FE_PORT);

const server = serve(process.env.FILE_DIR || "./frontEnd", {
  port: process.env.FE_PORT || 3000,
  ignore: ['node_modules']
})