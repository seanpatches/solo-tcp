const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',

});

const ws = fs.createWriteStream('./dog.json', {
  // flag: 'a'
});

ws.write('[{');
ws.write('\n\t "name" : "spot",');
ws.write('\n\t "type" : "dog",');
ws.write('\n\t "age" : "27"');
ws.write('\n');
ws.write('},');
ws.write('\n');
ws.write('{');
ws.write('\n\t "name" : "hurley",');
ws.write('\n\t "type" : "dog",');
ws.write('\n\t "age" : "27"');
ws.write('\n');
ws.write('}]');

ws.end();
