import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
  name: String,
  owner: String,
  area: String,
  categories: [String],
  selectedFile: String,
  openingAt: {
    type: Date
  },
  closingAt: {
    type: Date
  },
});

const ShopModel = mongoose.model("Shop", shopSchema);

export default ShopModel;
