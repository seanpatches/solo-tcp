const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 10

});

const ws = fs.createWriteStream('./pipe_copy', {
});

rs
  .pipe(ws);
