const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname , '/test'),{}, err =>{     // fs.mkdir(FilePath , {Objects to Write on file} , Error Callback)
    if (err) throw err;
    console.log("File is getting written");
});

fs.writeFile(path.join(__dirname,'/test','index.txt'),
"Hello World >> !!",
err => {
    if (err) throw err;
    console.log("File Wriiten using writeFile ");
}
);

fs.appendFile(path.join(__dirname , '/test' , 'index.txt') , 
"I am ram ... " ,
err => {
    if (err) throw err;
    console.log("Appending the file using appendFile");
}
)
