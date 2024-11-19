const mongoose = require("mongoose");
// const colors = require("colors");

// function to connect mongo db

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/expressjs");
    console.log(`connected to mongo db ${conn.connection.host}`);
  } catch (error) {
    console.log(`mongodb error ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
