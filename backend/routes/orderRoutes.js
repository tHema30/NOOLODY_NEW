import express from 'express';
const router = express.Router();
import {createOrder,getAllOrders} from '../controllers/orderOneController.js';
import upload from '../utils/multer.js';
import { protect ,isAdmin } from '../middleware/authMiddleware.js';



// Route to create a new order
router.post('/create',upload.single('image'),protect ,createOrder);

// Route to get all orders
router.get('/orders',getAllOrders);

export default router;
