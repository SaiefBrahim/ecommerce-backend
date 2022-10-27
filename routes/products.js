var express = require("express");
var router = express.Router();
var productsCtrl = require("../controllers/products");
var multerImages = require("../middlewares/multerImages");

router.post("/", multerImages.array("images"), productsCtrl.addProduct);
router.get("/", productsCtrl.getAllProducts);
router.get("/:id", productsCtrl.getProduct);
router.put("/:id", multerImages.array("images"), productsCtrl.updateProduct);

module.exports = router;
