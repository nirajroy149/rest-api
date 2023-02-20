const connectDB = require("./db/connect");
const datajson = require("./products.json");
const ProductModel = require("./model/model");

const start = async ()=>{
    try{
        await connectDB();
        await ProductModel.create(datajson);
        console.log("success")
    }catch(error){
        console.log("Error occured")
    }
}
start();

