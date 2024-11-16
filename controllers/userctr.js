const getuser = (req, res) => {
  res.send({
    success: "true",
    message: "data coming from mvc pattern",
  });
};

module.exports = { getuser };
