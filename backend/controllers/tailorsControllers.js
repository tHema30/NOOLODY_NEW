import asyncHandler from 'express-async-handler';
import {tailorsProfile } from "../models/tailorModel.js";


//tailors profile details

const tailors = asyncHandler(async (req,res) => {
    const { name, address, email, experience, contact, occupation, idnumber, dob, gender} = req.body;
    const data = await tailorsProfile.create ({
        name, address, email, experience, contact, occupation, idnumber, dob, gender
    });
    console.log(data);
    if(data){
        res.status(201).json(data);
    }else{
        res.status(400)
        throw new Error ("Invaild data")
    }
})


  
  export { tailors, };
