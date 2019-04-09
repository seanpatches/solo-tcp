const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 10

});

const ws = fs.createWriteStream('./streams_copy', {
});
rs.on('data', data => {
  ws.write(data);
});

rs.on('close', () => {
  ws.end();
  console.log('did it');
});

