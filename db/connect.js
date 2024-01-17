const mongoose = require("mongoose");

uri = "mongodb+srv://divya:c1wE711Q0NZELdxn@RestAPI.n1bisj1.mongodb.net";

const connectDB = () => {
  console.log("hey, we are connected!");
  return mongoose.connect(uri, {
    // useNewUrlParse: true,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
