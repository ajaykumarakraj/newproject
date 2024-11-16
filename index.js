// import
const express = require("express");
var bodyParser = require("body-parser");
// obj
const app = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use;
// rout
// app.get("/", (req, res) => {
//   res.send("<h1>hello</h1>");
// });

// rout other page
app.use("/api/v1/user", require("./routes/userrout"));

//post method
app.post("/contact-form", (req, res) => {
  const { inputdata } = req.body;
  res.json({
    success: true,
    message: `welcom to ${inputdata}`,
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`server run at  htht ${port}`);
});
