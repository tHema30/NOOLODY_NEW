
import express from 'express';
import upload from '../utils/multer.js';
import {uploadDressDesign} from '../controllers/dressDesignController.js';
import {getDressDesignByCat ,getAllDressDesigns,editDesign,deleteDesign} from '../controllers/dressDesignController.js'
import { isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();


// Route for handling dress design upload
router.post('/upload', upload.single('designImage'), uploadDressDesign);

router.get('/dress-designs',isAdmin, getAllDressDesigns);
router.get('/dress-designs/cat',getDressDesignByCat);
router.put('/dress-designs/edit',editDesign);
router.delete('/dress-designs/delete', deleteDesign);





export default router;