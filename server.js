const express = require("express");
const app = express();
const mongoose = require("mongoose");
const invoices = require("./routes/invoices");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/invoices", invoices);

app.use(express.static(path.join(__dirname, './client/build')))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './client/build'))
})


app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "client/build/index.html"),
    (err) => err && console.log(err)
  );
});

require("dotenv").config();
const dbConnData = {
  host: process.env.MONGO_HOST || "127.0.0.1",
  port: process.env.MONGO_PORT || 27017,
  database: process.env.MONGO_DATABASE || "localo",
};


mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((response) => {
    console.log(
      `Connected to MongoDB. Database name: "${response.connections[0].name}"`
    );
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB", error));
