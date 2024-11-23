const express = require("express");
const { getuser, adduser, createUser } = require("../controllers/userctr");

// routes  router object
const router = express.Router();

// create ne user
router.post("/create-user", createUser);
//routes  get user //get method
router.get("/", getuser);

// post user //post method
router.post("/add-user", adduser);
//export
module.exports = router;
