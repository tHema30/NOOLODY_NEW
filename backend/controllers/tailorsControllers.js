import asyncHandler from "express-async-handler";
import { tailorsProfile } from "../models/tailorModel.js";
import User from "../models/userModel.js";

//tailors profile details

const tailors = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    email,
    experience,
    contact,
    occupation,
    idnumber,
    dob,
    gender,
  } = req.body;

  const data = await tailorsProfile.create({
    name,
    address,
    email,
    experience,
    contact,
    occupation,
    idnumber,
    dob,
    gender,
    userId: req.user._id,
  });
  console.log(data);
  if (data) {
    const user = await User.findById(req.user._id);
    if (user) {
      user.role = "Tailor";
      let updated = await user.save();
      if (updated) {
        res.status(201).json(data);
      }
    }
  } else {
    res.status(400);
    throw new Error("Invaild data");
  }
});


const order = asyncHandler(async (req, res) => {
    const {
     tailorId,orderId
    } = req.body;
  
    const tailor = await tailorsProfile.findById(tailorId)
    console.log(tailor);
    let orderHistory={orderId:orderId}
    tailor.orderHistory.push(orderHistory) 
        let updated = await tailor.save();
        if (updated) {
          res.status(201).json(data);
        
    
    } else {
      res.status(400);
      throw new Error("Invaild data");
    }
  });



export { tailors };
