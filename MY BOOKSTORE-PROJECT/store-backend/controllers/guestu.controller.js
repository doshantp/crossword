import Guest from "../model/guestu.model.js";

export const guest = async (req, res) => {
  try {
    const guestdetails = new Guest(req.body);
    await guestdetails.save();
    res.status(201).send({
      success: true,
      message: "order saved successfully"
    });
  } catch (error) {
    console.error("Error during the order submission", error);

    res.status(500).json({ error: "Internal server error" });
  }
};