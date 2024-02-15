import asyncHandler from 'express-async-handler';
import { Servicedetail } from '../models/serviceDetails.js';
import fs from 'fs'
// import slugify from 'slugify'; 
// import { toNamespacedPath } from 'path';
import cloudinary from '../utils/imagecloudinary.js';
import multer from 'multer';






/// @desc  POST Serives
// // route     POST/api/Servicedetail/
// // @access isadmin
const Createservice = asyncHandler(async (req,res) => {
    const {name,type,category, description,image} = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'service-details',
    });
    
    const data = await Servicedetail.create ({
        name,type,category, description,image:{
          public_id: result.public_id,
          url: result.secure_url,
      },
        
    
    });
    if(data){
        res.status(201).json(data);

    }else{
        res.status(400)
        throw new Error (" Service Invaild data")
    }
   
});




/// @desc Get all Services
// // route GET /api/users/Servicedetail
// // @access isadmin
const getservicesdetail= asyncHandler(async (req, res) => {
    const serviceDetail= await Servicedetail.find({});
    res.json(serviceDetail);
  });
  

  // @desc Get a single Servies by ID
// route GET /api/users/ Servicedetail/id
// @access isadmin
const getservicedetailId = asyncHandler(async (req, res) => {
  
    const serviceID = await Servicedetail.findById(req.params.id);
    if (serviceID) {
      res.json(serviceID);
    } else {
      res.status(404);
      throw new Error('Service not found');
    }
  });


    // @desc Get a single Servies by ID
// route GET /api/users/ Servicedetail/id
// @access isadmin
const getservicedetailName= asyncHandler(async (req, res) => {
try{
  const name = req.params.name;

if(!name){
  return res.status(400).json({error:"name require"});

}
const serviceName = await Servicedetail.find({name:name});

      res.json(serviceName);
} catch(error) {
  console.error('Error fetching users', error);
  res.status(500).json({error: 'Internal server Error'})
}

 
});







   // @desc Delete Servicedetail by ID
// route DELETE /api/users/Servicedetail:id
// @access isadmin
const deleteserviesdetailId = asyncHandler(async (req, res) => {
    const {id} =req.params;
     try  {
       const deleteserviesdetail= await Servicedetail.findOneAndDelete(id)
       res.json({ message: 'Servicedetail removed',deleteserviesdetail });
     } catch {
       res.status(404);
       throw new Error('Servicedetail not found');
     }
   });
  



      /// @desc  Put Servicedetail
// // route     Put/api/Servicedetail/
// // @access admin

   const updateserviesdetail =  asyncHandler (async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body;
        const type = req.body;
        const category= req.body;
        const description= req.body;
        const image = await Servicedetail.findByIdAndUpdate(
            id, name,type,category,description,image
        )
        res.send(result)
    }
    catch (error) {
        res.status(400);
        throw new Error('Service not update')
    }
})



export {  Createservice, getservicesdetail, getservicedetailId, deleteserviesdetailId,updateserviesdetail,getservicedetailName};