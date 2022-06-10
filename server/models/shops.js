import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
  name: String,
  owner: String,
  area: String,
  categories: [String],
  selectedFile: String,
  openingAt: {
    type: Date,
    default: new Date(),
  },
  closingAt: {
    type: Date,
    default: new Date(),
  },
});

const ShopModel = mongoose.model("Shop", shopSchema);

export default ShopModel;
