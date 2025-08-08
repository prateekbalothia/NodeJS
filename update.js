const dbConnect = require('./mongodb');

const updateData= async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:"s25 plus"},
        {$set: {price:699}}
    )
}
updateData()