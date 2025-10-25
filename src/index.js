const http = require('http');
const port = process.env.PORT || 3000;
// create a server
// var x = 10

// someUndefinedVariable = 'This should cause an error';
const server = http.createServer((req, res) => {
  res.end('pro-node-js-setup after adding watch');
});

// start a server
server.listen(port, () => {
  console.log('server is running on port' + port);
});
