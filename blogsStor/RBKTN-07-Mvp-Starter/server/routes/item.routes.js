const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/add", itemController.add);
router.delete("/:id", itemController.delet);
router.put("/put/:id", itemController.updat);


module.exports = router;
