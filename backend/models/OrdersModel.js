
const {model } = require("mongoose");
const {OrdersSchema} = require("../schemas/OrderSchema");

const OrdersModel = new model("orders" , OrdersSchema);

module.exports = { OrdersModel };