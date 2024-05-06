const { Schema, model } = require("mongoose");

const gigsSchema = new Schema({
  posterImages: { type: [String], required: true },
  logo: { type: String, required: true },
  userName: { type: String, required: true },
  title: { type: String, required: true },
  review: { type: String, required: true },
  feddback: { type: [String], required: true },
  price: { type: String, required: true },
  about: { type: String, required: true },
  services: { type: [String], required: true },
  priceCategories: { type: [String], required: true, maxlength: 3 },
  // creator:{type: [String],userId:{type:String},name:{type:String}}
  userId:{type:String},
  name:{type:String}

  
  
});

const gigsModel = model("Gigs", gigsSchema);

module.exports = gigsModel;
