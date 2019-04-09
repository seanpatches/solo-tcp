const net = require('net');

const server = net.createServer(client => {
  console.log('client connected!!');

  // client.pipe(client);

  client.on('data', data => {
    console.log(data.toString('utf8'));
    client.write(`\n\tThis is what you said to me: ${data.toString('utf8')}`);
  });
});

server.listen(5466);
