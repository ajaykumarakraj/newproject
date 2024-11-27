const express = require("express");
const {
  createUser,
  getAlluser,
  getsingleuser,
  updateUser,
} = require("../controllers/userctr");

// routes  router object
const router = express.Router();

// create ne user
router.post("/create-user", createUser);
//routes  get user //get method

// get All users
router.get("/get-user", getAlluser);

// get single users
router.get("/get-user/:id", getsingleuser);

// update user
router.put("/update-user/:id", updateUser);
//export
module.exports = router;
