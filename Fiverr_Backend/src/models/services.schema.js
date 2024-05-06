const { Schema, model } = require("mongoose");
const serviceSchema = new Schema(
  {
    image: { type: String },
    logo: { type: String },
    title: { type: String },
    details: { type: String },
    video: { type: [String] },
    category: { type: String },
  },
  { versionKey: false }
);

const serviceModel = model("services", serviceSchema);
module.exports = serviceModel;
