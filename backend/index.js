
require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionModel } = require('./models/PositionModel');
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

const app = express();


app.use(cors({
  origin: [
  "http://localhost:5175", 
  "http://localhost:3000"
  ] , //  frontend port

  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

//  Routes after middleware
app.use("/", authRoute);

app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved");
});

//  Connect to DB, then start server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });