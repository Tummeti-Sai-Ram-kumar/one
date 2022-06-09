const path = require('path');

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename)); // Makes the entire file properties into an object type 

console.log('Dir : ',__dirname);