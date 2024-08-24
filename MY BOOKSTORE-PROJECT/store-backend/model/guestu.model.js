import mongoose from "mongoose";

const cartitemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  img: String,
  title: String,
});

const guestSchema = mongoose.Schema(
  {
    name: String,
    landmark: String,
    country: String,
    city: String,
    phone: Number,
    email: String,
    state: String,
    zipcode: String,
    TotalPrice: String,
    paymentmethod: String,
    cartitems: [cartitemSchema],
  },
  { timestamps: true }
);
const Guest = mongoose.model("Guest", guestSchema);

export default Guest;
