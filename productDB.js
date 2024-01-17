require("dotenv").config();
const connectDB = require("./db/connect");
const schema = require("./models/schema");

const ProductData = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await schema.deleteMany();
    await schema.create(ProductData);

    // console.log("Working");
  } catch (error) {
    console.log(error);
  }
};

start();
