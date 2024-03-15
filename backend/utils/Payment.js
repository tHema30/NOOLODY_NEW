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


import express from 'express';
import stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import Transaction from '../models/paymentModel.js';
import Order from '../models/orderOneModel.js';

const router = express.Router();
const stripeClient = stripe("sk_test_51OmVkmHGq8hdLEpwAmp2gzWQsoHAPexCum5ZYvMU2CuwuQpRyBcip5dw7WQdswnO6bRTlmioH6K69IUbDIKRmvYY00DDCebak3");

router.post("", async (req, res) => {
  try {
    const { design, token, info } = req.body;
    console.log(info)
    console.log(design)
    const transactionKey = uuidv4();
    const amountInCents = Math.max(design.price * 100, 50);

    // Create a customer in Stripe
    const customer = await stripeClient.customers.create({
      email: token.email,
      source: token.id
    });

    // Create a charge in Stripe
    const chargeResult = await stripeClient.charges.create({
      amount: amountInCents,
      currency: "LKR",
      customer: customer.id,
      receipt_email: token.email
    });

    // Update payment information in MongoDB
    const payment = await Order.findOneAndUpdate({ userId: info._id }, {
      amount: design.price,
      currency: "LKR",
      isPaid: true,
    });
console.log(payment);
    // If payment not found, throw an error
    if (!payment) {
      throw new Error('Order not found');
    }

    // Save updated payment
    await payment.save();

    
    // Respond with charge result
    res.json(chargeResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }

}

);

export default router;
