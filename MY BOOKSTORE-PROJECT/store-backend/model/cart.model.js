import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    Email: String,
    name: String,
    price: Number,
    category: String,
    img: String,
    title: String,
  },
  { timestamps: true }
);
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
