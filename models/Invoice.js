const mongoose = require("mongoose");

//Model

const schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  userInfo: {
      street: String,
      city: String,
      country: String,
      postCode: String,
  },
  clientInfo: {
      name: String,
      email: String,
      street: String,
      country: String,
      postCode: String,
      city: String,
  },
  createdAt: {
      type: Date,
      default: () => new Date()
  },
  paymentTerms: String,
  desc: String,
  status: String,
  itemsList: [{ name: String, price: Number, qty: Number }]
});

module.exports = mongoose.model("Invoice", schema);
