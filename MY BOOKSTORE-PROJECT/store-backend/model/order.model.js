import mongoose from "mongoose";
const cartitemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  img: String,
  title: String,
});
const orderSchema = mongoose.Schema(
  {
    Email:String,
    name: String,
    landmark: String,
    country: String,
    city: String,
    phone: Number,
    email: String,
    state: String,
    zipcode: Number,
    TotalPrice:Number,
    paymentmethod: String,
    cartitems: [cartitemSchema],
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);

export default Order;
