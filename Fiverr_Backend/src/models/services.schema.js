const { Schema, model} = require("mongoose");
const serviceSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    details: { type: String, required: true },
    category: { type: String, required: true }
    
  },
  { versionKey: false }
);

const serviceModel = model("services", serviceSchema);
module.exports = serviceModel;
