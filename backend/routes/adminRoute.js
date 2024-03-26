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
 
  } 
  from '../controllers/adminControllers.js';




//admin 
router.get('/all-users' ,protect,isAdmin,getallUser );
router.put('/all-users/:id' ,protect,isAdmin, getUserById);

router.get("/tailorsProfile",protect,isAdmin,getallTailors);
router.get("/tailorsProfile/:id" ,gettailorById);


router.put("/tailorsProfile/:id",updateTailor);

//@route   DELETE api/admin/deleteuser/:id
router.delete("/all-users/:id" ,deleteUser ,);
router.delete("/tailorsProfile/:id" ,deleteTailor) 






export default router;

