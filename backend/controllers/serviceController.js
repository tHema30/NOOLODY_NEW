import asyncHandler from 'express-async-handler';
import { Service } from '../models/ServiceModel.js';
import cloudinary from '../utils/imagecloudinary.js';


/// @desc  POST Serives
// // route     POST/api/Serivces/
// // @access Public
const service = asyncHandler(async (req,res) => {
    const {name,category, description,image} = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'Services',
  });
    const data = await Service.create ({
        name,category, description,image:{
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
// // route GET /api/users/Services
// // @access Public
const getservices= asyncHandler(async (req, res) => {
    const service= await Service.find({});
    res.json(service);
  });
// @desc Get a single Servies by ID
// route GET /api/servies/ id
// @access Public
const getserviceId = asyncHandler(async (req, res) => {
    const serviceID = await Service.findById(req.params.id);
    if (serviceID) {
      res.json(serviceID);
    } else {
      res.status(404);
      throw new Error('Service not found');
    }
  });
  // @desc Delete Servies by ID
// route DELETE /api/Servies/:id
// @access Private
const deleteserviesId = asyncHandler(async (req, res) => {
    const {id} =req.params;
     try  {
       const deleteservies= await Service.findOneAndDelete(id)
       res.json({ message: 'Service removed',deleteservies });
     } catch {
       res.status(404);
       throw new Error('Service not found');
     }
   });
    /// @desc  pa UpdateService
// // route     Put/api/UpdateService/
// // @access admin
const UpdateService =  asyncHandler (async (req, res) => {
  try {
      const id = req.params.id;
      const name = req.body;
      const category= req.body;
      const description= req.body;
      const image=req.body;
      const result = await Service.findByIdAndUpdate(
          id, name,category,description,image
      )
      res.send(result)
  }
  catch (error) {
      res.status(400);
      throw new Error('Service not update')
  }
})
export {
    service,
    getservices,
    getserviceId,
    deleteserviesId ,
    UpdateService
};