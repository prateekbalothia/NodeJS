const { name } = require('ejs');
const mongoose = require('mongoose');
const data = require('./data');

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});

const insertDb = async () => {
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({
        name:"p3 pro",
        brand:"realme",
        price:349,
        category:"mobile"
    });
    let result = await data.save();
    console.log(result);
}

const updateDb = async () => {
    const product = mongoose.model('products',ProductSchema);
    let data = await product.updateOne(
        {name:"p3"},
        {
            $set:{price:299}
        }
    )
    console.log(data);
}
updateDb();


const deleteDb = async () => {
    const product = mongoose.model('products',ProductSchema);
    let data = await product.deleteOne(
        {name:"p3"}
    );
    console.log(data);
}
deleteDb();


const findDb = async () => {
    const product = mongoose.model('products',ProductSchema);
    let data = await product.find(
        {name:"iphone 16 pro"}
    );
    console.log(data);
}
findDb();