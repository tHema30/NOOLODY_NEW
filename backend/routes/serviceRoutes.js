import express from 'express';
const router = express.Router();
import {service,getservices,getserviceId,deleteserviesId ,UpdateService } from '../controllers/serviceController.js';
import {Createservice,getservicesdetail,getservicedetailId,deleteserviesdetailId,updateserviesdetail,getservicedetailName } from '../controllers/serviceDetailsController.js'

import {isAdmin } from '../middleware/authMiddleware.js';

import upload from '../utils/multer.js';


router.post('/Services',upload.single('image'),service);
router.get('/Services',getservices);
router.get('/Services/:id',getserviceId);
router.delete('/Services/:id',deleteserviesId);
router.patch('/Services/:id',UpdateService);



router.post('/ServicesDetails',upload.single('image'),Createservice);
router.get('/ServicesDetails',getservicesdetail);
router.get('/ServicesDetails/:id', getservicedetailId);
router.get('/ServicesDetails/name/:name', getservicedetailName);
router.delete('/ServicesDetails/:id',deleteserviesdetailId);
router.patch('/ServicesDetails/:id',isAdmin,updateserviesdetail);



export default router;