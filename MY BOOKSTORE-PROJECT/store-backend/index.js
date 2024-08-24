import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import cartRoute from "./routes/Cart.route.js";
import orderRoute from "./routes/order.route.js";
import queryRoute from "./routes/query.route.js";
import guestRoute from "./routes/guestu.route.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

try {
  mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("Connected to mongodb");
} catch (error) {
  console.log("Error: ", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/", cartRoute);
app.use("/", orderRoute);
app.use("/", queryRoute);
app.use("/",guestRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
