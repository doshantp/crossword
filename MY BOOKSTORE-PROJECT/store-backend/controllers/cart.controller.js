import Cart from "../model/cart.model.js";

export const cart = async (req, res) => {
  try {
    const { Email, name, price, category, img, title } = req.body;
    

    //save
     {
      const cartItem = await new Cart({
        Email,
        name,
        price,
        category,
        img,
        title,
      }).save();
      res.status(201).send({ cartItem });
      // console.log("New item recieved Successfully");
    }
  } catch (error) {
    // console.error("Error during the registration", error);

    res.status(500).json({ error: "Internal server error" });
  }
};

export const cartfetch = async (req, res) => {
  try {
    const { Email } = req.body;

    //check user
    const usercart = await Cart.find({ Email });
    if (!usercart) {
      return res.status(404).send("No items found in the cart");
    }
    res.status(200).send({
      success: true,
      message: "Items are in the cart",
      usercart: usercart,
    });
  } catch (error) {
    // console.error("Error during login", error);

    res.status(500).json({ error: "Internal server error" });
  }
};

//remove

export const removecart = async (req, res) => {
  try {
    const { Email, title } = req.params;
    // console.log("inside backend" + req.params);
    const removecart = await Cart.deleteOne({ Email, title });
    
    if (removecart.deletedCount > 0) {
      return res.status(200).send({
        message: "removed an item from cart successfully",
        //upcart: upcart,
      });
    } else {
      res.status(404).send("item not found in the cart");
    }
  } catch (error) {
    console.error("Error during login", error);

    res.status(500).json({ error: "Internal server error" });
  }
};
export const removeorderitems = async (req, res) => {
  try {
    const { Email } = req.params;
    // console.log("inside backend" + req.params);
    const removecart = await Cart.deleteMany({ Email });

    if (removecart.deletedCount > 0) {
      return res.status(200).send({
        message: "removed items from cart successfully",
      });
    } else {
      res.status(404).send({
        message: "item not found in the cart",
      });
    }
  } catch (error) {
    console.error("Error during login", error);

    res.status(500).json({ error: "Internal server error" });
  }
};
