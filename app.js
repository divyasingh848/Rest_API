const express = require("express");
const app = express();
const products_router = require("./routes/products");
const connectDB = require("./db/connect");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hey!! There you go..");
});

// Middelware or to set route
app.use("/api/products", products_router);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`"connected to the port" ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
