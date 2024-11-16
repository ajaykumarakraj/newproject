const express = require("express");
const { getuser } = require("../controllers/userctr");

// routes  router object
const router = express.Router();
//routes
router.get("/", getuser);
//export
module.exports = router;
