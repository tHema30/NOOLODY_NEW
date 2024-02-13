import express from 'express';
const router = express.Router();
import { protect ,isAdmin } from '../middleware/authMiddleware.js';

import { 

    getallUser,
    getUserById,
    deleteUser,
    getallTailors,
    gettailorById,
    updateTailor,
    deleteTailor,
    getallOrders,
    getallOrdersById 
  } 
  from '../controllers/adminControllers.js';




//admin 
router.get('/all-users' ,getallUser ,isAdmin,protect);
router.get('/all-users/:id' ,protect, isAdmin, getUserById);

router.get("/tailorsProfile" ,getallTailors);
router.get("/tailorsProfile/:id" ,gettailorById);

router.get('/all-orders' ,protect,getallOrders);
router.get("all-orders/:id",protect,getallOrdersById);

router.put("/tailorsProfile/:id",protect,updateTailor);

//@route   DELETE api/admin/deleteuser/:id
router.delete("/all-users/:id" ,protect,deleteUser ,);
router.delete("/tailorsProfile/:id" ,protect,deleteTailor) 






export default router;

