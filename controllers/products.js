const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "getAllProductTesting" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "getAllProduct" });
};

module.exports = { getAllProducts, getAllProductsTesting };
