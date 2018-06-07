//file serve
var fs = require('fs');
var data = '';


//create read stream
var readStream = fs.createReadStream('input.txt');

//set the encode to be utf8
readStream.setEncoding('UTF8');

//process the input stream
readStream.on('data', function(chunk) {
	data += chunk;
});

readStream.on('end', function() {
	console.log(data);
});

readStream.on('error', function(err) {
	console.log(err.stack);
});

console.log('finish');


