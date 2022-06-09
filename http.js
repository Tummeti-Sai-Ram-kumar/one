







const http = require('http');
const PORT = process.env.PORT || 1000;

http.createServer((req,res) => {
    console.log('REQ.URL : ',req.url);
}).listen(PORT, (err) => {
    if (err) throw err;
    console.log("Server Running on port 1000");
})