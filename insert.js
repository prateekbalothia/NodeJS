const dbConnect = require('./mongodb');

const insert = async () => {
    const data = await dbConnect();
    const result =await data.insertMany(
        [
            // {name:"nord 5",brand:"oneplus",price:399,category:"mobile"},
            {name:"nord ce 5", brand:"oneplus", price:299,category:"mobile"}
        ]
    );
if(result.acknowledged){
    console.log("data inserted");
}
}
insert();