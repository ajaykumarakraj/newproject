const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "name is requre"],
    },
    email: {
      type: String,
      require: [true, "email is requre"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "password is requre"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
