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
module.exports = { getuser, adduser };
