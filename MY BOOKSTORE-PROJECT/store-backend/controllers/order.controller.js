import Order from "../model/order.model.js";

export const order = async (req, res) => {
  try {
    const orderdetails = new Order(req.body);
    const saveorder = await orderdetails.save();
    res.status(201).send({
      success: true,
      message: "orders updated successfully",
      savedOrders: saveorder,
    });
  } catch (error) {
    console.error("Error during the registration", error);

    res.status(500).json({ error: "Internal server error" });
  }
};

export const ordersfetch = async (req, res) => {
  try {
    // console.log(req.body);
    const { Email } = req.body;

    //check user
    const userorders = await Order.find({ Email });
    if (!userorders) {
      return res.status(404).send("user not registered");
    }
    res.status(200).send({
      success: true,
      message: "orders fetched successfully",
      userorders: userorders,
    });
  } catch (error) {
    console.error("Error during login", error);

    res.status(500).json({ error: "Internal server error" });
  }
};
