


const serve = require('serve');
require('dotenv').config();

console.log(process.env.FE_PORT);

const server = serve(process.env.FILE_DIR, {
  port: process.env.FE_PORT,
  ignore: ['node_modules']
})