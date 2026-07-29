
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./Routes/AuthRoute.js";
import profileRoute from "./Routes/ProfileRoute.js";

import HoldingsModel from "./models/HoldingsModel.js";
import PositionModel from "./models/PositionModel.js";
import OrdersModel from "./models/OrdersModel.js";


const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5175",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", authRoute);
app.use("/profile" , profileRoute);

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send("Order saved");
});

// Connect to DB and start server
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB connected!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

startServer();