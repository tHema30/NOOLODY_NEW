// routes/cartRoutes.js
import express from 'express';
const router = express.Router();
import addToCart from '../controllers/addtoCartController.js';

// Add to cart route
router.post('/add', addToCart );

export default router;
