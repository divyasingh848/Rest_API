const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("hey, we are connected!");
  return mongoose.connect(uri, {
    // useNewUrlParse: true,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
