const { server } = require('./src/server.js');

const {
  PORT
} = process.env

server.listen(3050, () => {

    console.log(`listening at ${3050}`); // eslint-disable-line no-console
  });