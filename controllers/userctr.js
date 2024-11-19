const UserModel = require("../module/userModel");
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
    console.log(`error in create vuser ${error}`);
    res.status(400).json({
      message: false,
      error,
    });
  }
};
module.exports = { getuser, adduser, createUser };
