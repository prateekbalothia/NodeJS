var colors = require("colors"); //importing package
const imp1 = require("./imp1"); //importing elements of another file
const http = require("http");


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
// const fs = require("fs"); //importing filesystem module

// fs.writeFileSync("demo.txt","lerning node js",)

//creating files using path module
// const path = require("path");

// const dirPath = path.join(__dirname, "files");
// const filePath = `${dirPath}/hello.txt`;
// fs.writeFileSync(`${dirPath}/hello.txt`,`a simple text file`);

//get files
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
// const data = require("./data");

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4500);


//express js
// const express = require("express"); //importing exprssjs
// const app = express();  //initializing js

// app.get('',(req,res)=>{
//     res.send(`
//         <h1>this is homepage...</h1>
//         <a href="/about">Go to About page</a>
//         `);

// });
// app.get('/about',(req,res)=>{
//     res.send(`
//         <h1>this is about page...</h1>
//         <input type="text" placeholder="username" value="${req.query.name}">
//         <a href="/">Go to homepage</a>    
//     `);
// });

//accessing HTML file
// const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath))
// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicPath}/about.html`);
// })

//ejs
// app.set('view engine', 'ejs');
// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// });
// const user={
//     Name:"Prateek Balothia",
//     Email:"Prateek@test.com",
//     City:"Jaipur",
//     skills:['php', 'java', 'c++', 'node', 'JS']
// }
// app.get('/profile',(req,res)=>{
//     res.render('profile',{user});
// });
// app.get('/login', (req,res)=>{
//     res.render('login');
// })


//middleware
// const reqFilter = require("./middleware")


// const reqFilter=(req,res,next)=>{
//     if (!req.query.age) {
//         res.send("Please provide age")
//     }
//     else if (req.query.age<18) {
//         res.send("You can not access this page!")

//     }
//     else{
//         next();

//     }
// }
// app.use(reqFilter);
// app.get('/',(req,res)=>{
//     res.send(`Welcome to Homepage`);
// });
// app.get('/about',(req,res)=>{
//     res.send(`About US`);
// });
// app.get('/user',reqFilter,(req,res)=>{
//     res.send(`User page`);
// });

//using middleware on specific page using route
// const route = express.Router();

// route.use(reqFilter);

// app.get('/',(req,res)=>{
//     res.send(`Welcome to Homepage`);
// });
// route.get('/about',(req,res)=>{
//     res.send(`About US`);
// });

// app.use(route);


// app.listen(4500);



//using mongodb
// const { MongoClient } = require('mongodb'); //importing mongodb
// const url = 'mongodb://localhost:27017';  //mongodb path
// const client = new MongoClient(url);

// const database = 'e-comm';

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// let data = await collection.find({}).toArray();
// console.log(data);
// }

//handling through promise
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// });

//handle using async
// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main()

//use external file as connection
// const dbConnect = require('./mongodb');

// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main()


//post api mongoose
// const express = require('express');
// const app=express()
// require('./config');
// const product = require('./product')

// app.use(express.json())

// app.post("/create",async (req,res) => {
//     let data = new product(req.body);
//     let result = await data.save();
//     console.log(result)
//     res.send(result)
//     console.log(req.body)
// });

// //get api mongoose
// app.get('/list', async (req, res) => {
//     let data = await product.find();
//     res.send(data)
// })

// //delete api mongoose
// app.delete('/delete/:_id', async (req, res) => {
//     console.log(req.params);
//     let data = await product.deleteOne(req.params);
//     res.send(data);
// })

// //put api mongoose
// app.put('/update/:_id', async (req,res) => {
//     let data = await product.updateOne(
//         req.params,
//         {$set: req.body}
//     )
//     res.send(data)
// })

// //regex
// app.get('/find/:key',async (req,res) => {
//     console.log(req.params.key)
//     let data = await product.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}}
//             ]
//         }
//     )
//     res.send(data)
// })

// app.listen(4500)

//multer
// const express = require('express');
// const app = express();
// const multer = require('multer');
// const data = require("./data");

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "./public/assets/img")
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file")
// app.post('/upload', upload, async (req, res) => {
//     res.send("file uploaded");
// })

// app.listen(4500);

//os module
// const os = require('os');
// const { log } = require("console");
// console.log(os.arch());//system architecture
// console.log(os.freemem()/(1024*1024*1024));//free memory(ram)
// console.log(os.totalmem()/(1024*1024*1024));//available memory(ram)
// console.log(os.hostname());//system name
// console.log(os.platform());//os
// console.log(os.userInfo());


//event and event emitter
// const express = require('express');
// const EventEmitter = require('events');
// const app = express();
// const event = new EventEmitter();

// let count=0;
// event.on('countAPI',()=>{
//     count++;
//     console.log("event called",count)
// })

// app.get('/',async (req,res) => {
//     res.send('api called');
//     event.emit("countAPI");
// });
// app.get('/search',async (req,res) => {
//     res.send('api searched');
//     event.emit("countAPI");
// });
// app.get('/update',async (req,res) => {
//     res.send('api updated');
//     event.emit("countAPI");
// });

// app.listen(4500);

//mysql
// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'test'
// });
// con.connect((err)=>{
//     if(err){
//         console.warn("error");
//     }
//     else{
//         console.warn("connected")
//     }
// });

// con.query("select * from users",(err,result)=>{
//     console.warn("result",result)
// })

const con = require('./configsql')
const express = require('express');
const { name } = require("ejs");
const app = express();

//get api mysql
app.get('/',(req,res)=>{
    con.query("select * from users",(err,result)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result);
        }
    })
});

//post api mysql
app.use(express.json());

app.post('/',(req,res)=>{
    const data = req.body;
    con.query("INSERT INTO users SET ?",data, (error,result,fields)=>{
        if(error){
            error;
        }
        res.send(result);
    })
})

//put api mysql
app.put('/:id',(req,res)=>{
    // const data = ["navya","0000","sleeper",4];//static
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];//dynamic
    con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",data,(error,result,fields)=>{
        if(error){
            error;
        }
        res.send(result);
    })
});

//delete api mysql
app.delete('/:id',(req,res)=>{
    // const data = 
    con.query("DELETE FROM users WHERE id ="+ req.params.id, (error,result,fields)=>{
        if(error) throw error;
        res.send(result);
    })
    // res.send(req.params.id);
})

app.listen(4500);