import { Schema, model } from "mongoose";

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const OrdersModel = model("orders", OrdersSchema);

export default OrdersModel;