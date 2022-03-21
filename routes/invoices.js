const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

function getRandomInt() {
  let min = Math.ceil(0);
  let max = Math.floor(9999);
  return Math.floor(Math.random() * (max - min)) + min;
}

router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    res.json(invoices);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const invoices = await Invoice.insertMany({
      id: getRandomInt(),
      ...req.body,
    });
    res.send(invoices);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
  } catch (error) {}
});

router.put("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndUpdate(
      { id: req.params.id },
      req.body
    );
    res.send(invoice);
  } catch (error) {
    console.log(error);
  }
});

router.put("/pay/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndUpdate(
      { id: req.params.id },
      { status: "paid" }
    );
    res.send(invoice);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const invoices = await Invoice.deleteMany({ id: req.params.id });
    res.send(invoices);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
