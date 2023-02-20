const ProductModel = require("../model/model");

const getAllProducts = async (req,res) => {
    const myData = await ProductModel.find({});
    res.status(200).json({myData});
};

const getAllProductsTesting = async (req,res) => {
    const {name,company,featured,sort} = req.query;
    let queryObj = {};
    let sortobj = {};
    if(name){
        queryObj.name = {$regex: name, $options: 'i'};
    }
    if(sort){
        sortobj = sort.replace(",", " ");
        
    }
    if(company){
        queryObj.company = {$regex: company, $options: 'i'};
    }
    if(featured){
        queryObj.featured = featured;
    }
    // console.log(sort)
   let  myData={};
    if(sort){

        myData = await ProductModel.find(queryObj).sort(sortobj);
    }else{

       myData = await ProductModel.find(queryObj);
    }
    
    res.status(200).json({myData});
};

// wont work
// export {getAllProducts,getAllProductsTesting}
module.exports = {getAllProducts,getAllProductsTesting}