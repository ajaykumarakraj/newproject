// import
const express = require("express");
var bodyParser = require("body-parser");
const { route } = require("./routes/userrout");
// obj
const app = express();
// view template engine
app.set("view engine", "pug");
app.set("views", "./views");
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

// view route

app.get("/", (req, res) => {
  res.render("firstfile");
});
//post method
// app.post("/contact-form", (req, res) => {

// });

const port = 5000;
app.listen(port, () => {
  console.log(`server run at  htht ${port}`);
});
