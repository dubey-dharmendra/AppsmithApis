const express = require("express");

const docController = require("../controller/docController");
const userController = require("../controller/userController");


const router = express.Router();

router.post("/document/uplode", docController.uplodeDoc)
router.get("/document/getAll", docController.getAll)
router.get("/document/get-all-docs-by-userid/:id", docController.getDocs)


// *************** User Routes ********** 
router.get("/user/getAll", userController.getAll)
router.get("/user/:id", userController.getOne)

module.exports = router