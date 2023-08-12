const express = require("express");
const router = express.Router();
const userController = require("../controllers/userAPI");
router.post("/", userController.createCandy);

router.get("/", userController.getCandy);

router.put("/edit/:id", userController.updateQuantity);

router.delete("/:id", userController.deleteCandy);

module.exports = router;
