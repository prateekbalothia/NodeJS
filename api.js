const express = require('express');
const app = express();
const dbConnect = require('./mongodb');

app.use(express.json());

//get api method
app.get('/',async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)
});

//post api method
// app.post('/',(req,res)=>{
//     console.log(req.body)
//     res.send(req.body)
// })

//inserting in mongodb using postman
app.post('/',async (req,res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)

    res.send(result)
})

//put api method
app.put('/', async (req, res) => {
    let data = await dbConnect()
    let result = data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    res.send({result:"Updated"})
})


app.listen(4500);