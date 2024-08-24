import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { Firstname, Lastname, Email, Password, Phone,Address } = req.body;
    const user = await User.findOne({ Email });
    if (user) {
      return res.status(400).json({ message: "User Already exits" });
    }

    const hashpassword = await bcryptjs.hash(Password, 10);
    const createdUser = new User({
      Firstname: Firstname,
      Lastname: Lastname,
      Email: Email,
      Password: hashpassword,
      Phone: Phone,
      Address:Address
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error " + error.message);
    res.status(500).json({ message: "Check details before submit" });
  }
};

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const loginuser = await User.findOne({ Email });
    if (!loginuser) {
      return res.status(400).send({ message: "Invalid email" });
    }
    const isMatch = await bcryptjs.compare(Password, loginuser.Password);

    if (!isMatch) {
      return res.status(400).send({ message: "Invalid password" });
    } else {
      res.status(200).send({
        success: true,
        message: "Login Successful",
        user: loginuser,
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};
