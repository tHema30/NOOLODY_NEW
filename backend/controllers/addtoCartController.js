// controllers/cartController.js
import asyncHandler from 'express-async-handler';
import CartItem  from '../models/addtoCartModel.js'

const addToCart = async (req, res) => {
  const { dressDesignId } = req.body;

  try {
    // Check if dress design exists
    const dressDesign = await DressDesign.findById(dressDesignId);

    if (!dressDesign) {
      return res.status(404).json({ message: 'Dress design not found' });
    }

    const cartItem = new CartItem({
      dressDesign: dressDesign._id,
      // Add other fields as needed
    });

    await cartItem.save();

    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
 export default  addToCart;