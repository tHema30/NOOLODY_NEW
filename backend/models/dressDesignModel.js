
import mongoose from 'mongoose';
const dressDesignSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  designImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const DressDesign = mongoose.model('DressDesign', dressDesignSchema);
export default DressDesign;