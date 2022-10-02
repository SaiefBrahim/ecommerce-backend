var express = require("express");
var router = express.Router();
var addressCtrl = require("../controllers/address");
var auth = require("../middlewares/auth");
/* GET users listing. */
router.get("/", addressCtrl.getAddress);
router.get("/:id", addressCtrl.getAddressId);
router.get("/country/:country", addressCtrl.getCities);
router.get("/country/:country/city/:city", addressCtrl.getRoads);
router.post("/", auth, addressCtrl.addOneAddress);
router.post("/many", auth, addressCtrl.addManyAddress);
router.put("/:id", auth, addressCtrl.updateAddressId);
router.delete("/:id", auth, addressCtrl.deleteAddress);
module.exports = router;
