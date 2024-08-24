import mongoose from "mongoose";

const querySchema = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);
const Query = mongoose.model("Query", querySchema);

export default Query;
