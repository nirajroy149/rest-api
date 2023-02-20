const express = require('express');
const router = express.Router();

const {getAllProducts, getAllProductsTesting} = require("../controllers/products");


// this will not work
// router.get("/",()=>{getAllProducts})
// router.get("/testing",()=>{getAllProductsTesting})

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);



// this will not work
// export default router;

module.exports = router;

