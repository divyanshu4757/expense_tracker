const express = require("express");
const router = express.Router();
const userController = require("../controllers/userAPI");
router.post("/", userController.createExpense);
router.get("/", userController.getExpenses);
router.put("/edit/:id", userController.updateExpense);
router.delete("/:id", userController.deleteExpense);
module.exports = router;
