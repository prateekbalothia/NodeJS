var colors = require("colors"); //importing package
const imp1 = require("./imp1"); //importing elements of another file
const fs = require("fs"); //importing filesystem module
const http = require("http");
const data = require("./data");
const path = require("path");
const express = require("express");
const app = express();


// console.log("Prateek".bgBlue);
// console.log("Balothia".blue);
// console.log("Hello!!".random);
// console.log(imp1.z());
// console.log(fltr.arr[6])



//filter
// var arr = [2,4,7,1,3,8,3]
// const filtered = arr.filter((num, index) => index==0);
// console.log(filtered);
// var ar = [12,15,21,75,35,95,29,17];
// const filtr = ar.filter((item,index)=>console.log(index+1,"=",item>25));
// console.log(filtr)


//using fs
// fs.writeFileSync("demo.txt","lerning node js",)


//creating files using path module
const dirPath = path.join(__dirname, "files");
const filePath = `${dirPath}/hello.txt`;
// fs.writeFileSync(`${dirPath}/hello.txt`,`a simple text file`);
// //get files
// fs.readdir(dirPath,(error,files)=>{
//     // console.log(files)
//     files.forEach((item)=>{
//         console.log(item);
//     })
// })
//read files
// fs.readFile(filePath,'utf8',(error,file)=>{
//     console.log(file);
// })

//update files
// fs.appendFile(filePath,', updated',(error)=>{
//     if(!error) console.log("file is updated")
// })

//rename file
// fs.rename(filePath,`${dirPath}/ehehehe.txt`,(error)=>{
//     if(!error) console.log("File name is updated")
// })

//delete files
// fs.unlinkSync(`${dirPath}/ehehehe.txt`);



//creating server
// http.createServer((req,res)=>{
//     res.write("<h1>Hey there</h1>");
//     res.end();
// }).listen(4500)

//creating API
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4500);


//express js
app.get('',(req,res)=>{
    res.send(`
        <h1>this is homepage...</h1>
        <a href="/about">Go to About page</a>
        `);

});
app.get('/about',(req,res)=>{
    res.send(`
        <h1>this is about page...</h1>
        <input type="text" placeholder="username" value="${req.query.name}">
        <a href="/">Go to homepage</a>    
    `);
});

app.listen(4500);