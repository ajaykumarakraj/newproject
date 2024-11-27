const UserModel = require("../module/userModel");
const { use } = require("../routes/userrout");
const getuser = (req, res) => {
  res.send({
    success: "true",
    message: "data coming from mvc pattern",
  });
};

const adduser = (req, res) => {
  const { inputdata } = req.body;
  res.json({
    success: true,
    message: `welcom to ${inputdata}`,
  });
};
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(`error in create user ${error}`);
    res.status(400).json({
      message: false,
      error,
    });
  }
};
//get all users

const getAlluser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({
      success: true,
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "get all user",
      error: error.message,
    });
  }
};

// get sigle user
const getsingleuser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      res.status(200).send("user not foun");
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "single user error",
      error: error.message,
    });
  }
};

// update user
const updateUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.status(201).json({
      success: true,
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("user not found ");
  }
};
module.exports = { getAlluser, createUser, getsingleuser, updateUser };
