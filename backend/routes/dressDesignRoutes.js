
import express from 'express';
import upload from '../utils/multer.js';
import {uploadDressDesign} from '../controllers/dressDesignController.js';
import {getDressDesignByCat ,getAllDressDesigns,editDesign,deleteDesign} from '../controllers/dressDesignController.js'
import { isAdmin ,protect} from '../middleware/authMiddleware.js';

const router = express.Router();


// Route for handling dress design upload
router.post('/upload', upload.single('designImage'), uploadDressDesign);

router.get('/dress-designs', getAllDressDesigns);
router.get('/dress-designs/cat/:category',getDressDesignByCat);
router.put('/dress-designs/edit/:id',editDesign);
router.delete('/dress-designs/delete', deleteDesign);





export default router;