// models/CartItem.js
import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  dressDesign: { type: mongoose.Schema.Types.ObjectId, ref: "DressDesign" },
  quantity: { type: Number, default: 1 },

});

const cartItem =  mongoose.model("CartItem", cartItemSchema);
export default {cartItem};
