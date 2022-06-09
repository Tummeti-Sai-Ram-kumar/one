const express = require('express');  //Access Express Module
const app = express()   // Instantiation of an express app
 // Nodemon is a package which updates the browser without restarting the server  , npm install --save--dev nodemon

var PORT = process.env.PORT || 4000  // Whatever is there in environment variable PORT or 4000 

const NoteFromRoute = require('./routes.js');  //  Accesss routeJS file and go to line 54

app.get('/hello',function(req,res){
    res.send('Hello World from index.js');    // send this string as response on port 3000
})

app.get('/world',function(req,res){
    res.send('World');
})


app.get('/world/asia',function(req,res){        // Making Sub Routes
    res.send('Hello World from Asia');
})

var callBackOne = function(req,res,next){
    console.log("Call Back One Called");
    next();
}
var callBackTwo = function(req,res,next){
    console.log("Call Back two Called");
    next();
}
var callBackThree = function(req,res){
    console.log("Call Back three Called");
    res.send('All Callbacks triggered');
}


app.get('/middleware',[callBackTwo,callBackOne,callBackThree]);




app.get('/world/asia/india',function(req,res,next){     // Middle Ware function has a next parameter in the call back
    console.log("Exploring India");     // Starts executing this middleWare function 
    next();                             // Goes to the next callback function and executes it 
},function(req,res){
    console.log("Explored India")
    res.send('Great You did it ..!! ')
})






app.get('/helloworld',NoteFromRoute);

app.listen(PORT , () => {
    console.log("Server Listening on PORT number 4000");
});




