const Service = require("../Model/service");

const ServiceController = async (req, res) => {
  try {
    const serviceData = await Service.find();
    if (!serviceData) {
      return res.status(404).json("No data found");
    }

    return res.status(200).json(serviceData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = ServiceController;
