const express = require("express");
const { getuser, adduser } = require("../controllers/userctr");

// routes  router object
const router = express.Router();
//routes  get user //get method
router.get("/", getuser);

// post user //post method
router.post("/add-user", adduser);
//export
module.exports = router;
