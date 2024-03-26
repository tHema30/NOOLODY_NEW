// import express from 'express';
// import stripe from 'stripe';
// import { v4 as uuidv4 } from 'uuid';
// import mongoose from 'mongoose';
// import Transaction from '../models/paymentModel.js';
// import Order from '../models/orderOneModel.js';


// const router = express.Router();
// const stripeClient = stripe("sk_test_51OmVkmHGq8hdLEpwAmp2gzWQsoHAPexCum5ZYvMU2CuwuQpRyBcip5dw7WQdswnO6bRTlmioH6K69IUbDIKRmvYY00DDCebak3");

// router.post("", (req, res) => {
//   const { design, token ,info} = req.body;
//   const transactionKey = uuidv4();
//   const amountInCents = Math.max(design.price * 100, 50);
//   stripeClient.customers.create({
//     email: token.email,
//     source: token.id
//   }).then((customer) => {
//     stripeClient.charges.create({
//       amount: amountInCents ,
//       currency: "LKR",
//       customer: customer.id,
//       receipt_email: token.email,
      
      
//     }).then(async (result) => {
//       // Save payment information to MongoDB
//       console.log(result);
      
//       const payment = await Order.findByIdAndUpdate({userId:info._id})
//        if(payment){
//         payment.amount =design.price ,
//         payment.currency ="LKR",
//         payment.isPaid=true,
//         payment.paidAt=Date.now()
//         const updateorder = await payment.save() ;
//         return updateorder;

//         }else
//               {
//         throw new Error ('Order not found')


//        }
//       // new Transaction({
//       //   transactionKey,
//       //   amount: design.price ,
//       //   currency: "LKR",
//       //   user: info._id,
//       //   customer: customer.id,
//       //   receipt_email: token.email,

//       // });
//       console.log( payment );

     

//       try {
//         await payment.save();
//         res.json(result);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Payment failed" });
//       }
//     }).catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: "Payment failed" });
//     });
//   });
// });



import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import nodemailer from "nodemailer";
// import { tailorsOrder } from "../models/ordermodel.js";

import { tailorsProfile } from "../models/tailorModel.js";

//getalluse profiles
const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

//get tailors details by id

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const UserById = await User.findById(id);
    console.log(UserById);
    res.json(UserById);
  } catch (error) {
    throw new Error(error);
  }
});

//@desc   Delete user by ID
//route DELETE/api/admin/users/:id
//@access Private (only accessible by admin)

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.deleteOne();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// all tailors asmin find

const getallTailors = asyncHandler(async (req, res) => {
  try {
    const allTailors = await tailorsProfile.find({});

    res.status(200).send({
      message: "Tailors fetched successfully",
      success: true,
      data: allTailors,
    });
  } catch (error) {
    console.error(error); // Use console.error for errors
    res.status(500).send({
      message: "Error fetching tailors",
      success: false,
      error: error.message, // Send only the error message to the client
    });
  }
});

//get tailors details by id

const gettailorById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findtailors = await tailorsProfile.findById(id);
    res.json(findtailors);
  } catch (error) {
    throw new Error(error);
  }
});

//update tailors

// const updateTailor = asyncHandler(async (req, res) => {
//   const {verified } = req.body;

//   const tailor = await tailorsProfile.findById(req.params.id);

//   if (tailor) {
//     tailor.verified = verified || tailor.verified;

//     const updatedTailor = await tailor.save();
//     res.json('Successfully updated');
//   } else {
//     res.status(404);
//     throw new Error('Tailor not found');
//   }
// });

// updateTailor function

const updateTailor = asyncHandler(async (req, res, next) => {
  try {
    const tailor = await tailorsProfile.findById(req.params.id);

    if (!tailor) {
      res.status(404);
      throw new Error("Tailor not found");
    }

    tailor.verified = true;
    const updatedTailor = await tailor.save();

    // Check if the tailor is now verified and send email if true
    if (updatedTailor.verified) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASS,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL,
        to: tailor.email,
        subject: "Verification Success",
        text: "Congratulations! Your tailor account has been verified.",
      };

      await transporter.sendMail(mailOptions);
    }

    res.json("Successfully updated");
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }
});

// all orders admin get
// const getallOrders = asyncHandler(async (req, res) => {
//   try {
//     const getOrders = await tailorsOrder.find();
//     res.json(getOrders);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

//get tailors details by id

// const getallOrdersById = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   try {
//     const findOrders = await tailorsOrder.findById(id);
//     res.json(findOrders);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

//@desc   Delete tailor by ID
//route DELETE/api/admin/users/:id
//@access Private (only accessible by admin)

const deleteTailor = asyncHandler(async (req, res) => {
  const tailor = await tailorsProfile.findById(req.params.id);

  if (tailor) {
    await tailor.deleteOne(); // or tailor.deleteMany() for deleting multiple documents
    res.json({ message: "Tailor removed" });
  } else {
    res.status(404);
    throw new Error("Tailor not found");
  }
});

export {
  getallUser,
  getUserById,
  deleteUser,
  getallTailors,
  gettailorById,
  updateTailor,
  deleteTailor,
  // getallOrders,
  // getallOrdersById,
};
