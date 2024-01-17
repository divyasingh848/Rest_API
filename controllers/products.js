const schema = require("../models/schema");
const getAllProductsTesting = async (req, res) => {
  const myData = await schema.find(req.query);
  console.log(myData);
  res.status(200).json({ myData });
};

const getAllProducts = async (req, res) => {
  const myData = await schema.find({});
  console.log(myData);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
