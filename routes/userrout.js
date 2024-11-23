const express = require("express");
const { createUser } = require("../controllers/userctr");

// routes  router object
const router = express.Router();

// create ne user
router.post("/create-user", createUser);
//routes  get user //get method

// get All users
router.get("/get-user", getAlluser);
//export
module.exports = router;
