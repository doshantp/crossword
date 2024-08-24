import Query from "../model/query.model.js";

export const query = async (req, res) => {
  try {
    const querydetails = new Query(req.body);
    await querydetails.save();
    res.status(201).send({
      success: true,
      message: "query saved successfully"
    });
  } catch (error) {
    console.error("Error during the query submission", error);

    res.status(500).json({ error: "Internal server error" });
  }
};