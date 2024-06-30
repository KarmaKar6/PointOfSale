const billsModel = require("../models/billsModel");
// Add items
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Customer details generated successfully");
  } catch (error) {
    res.send("Something went wrong");
    console.log(error);
  }
};
// get bills data
const getCustomersController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addCustomersController,
  getCustomersController,
};
