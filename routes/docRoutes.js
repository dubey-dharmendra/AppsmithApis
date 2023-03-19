const express = require("express");

const docController = require("../controller/docController");
const userController = require("../controller/userController");


const router = express.Router();

router.post("/document/uplode", docController.uplodeDoc)
router.get("/document/getAll", docController.getAll)
router.get("/document/getDocByUserId/:id", docController.getDocByUserId)
// router.get("/document/isverefied/:id", docController.isVerifed)


// *************** User Routes ********** 
router.get("/user/getAll", userController.getAll)
router.get("/user/:id", userController.getOne)

module.exports = router