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
router.get('/all-users' ,protect,isAdmin,getallUser );
router.get('/all-users/:id' ,protect,isAdmin, getUserById);

router.get("/tailorsProfile",protect,isAdmin,getallTailors);
router.get("/tailorsProfile/:id" ,gettailorById);

router.get('/all-orders',protect,isAdmin,getallOrders);
router.get("all-orders/:id",protect,isAdmin,getallOrdersById);

router.put("/tailorsProfile/:id",updateTailor);

//@route   DELETE api/admin/deleteuser/:id
router.delete("/all-users/:id" ,deleteUser ,);
router.delete("/tailorsProfile/:id" ,deleteTailor) 






export default router;

