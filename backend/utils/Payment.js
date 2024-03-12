// paymentRoutes.js
import express from 'express';
import stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import Transaction from '../models/paymentModel.js';

const router = express.Router();
const stripeClient = stripe("sk_test_51OmVkmHGq8hdLEpwAmp2gzWQsoHAPexCum5ZYvMU2CuwuQpRyBcip5dw7WQdswnO6bRTlmioH6K69IUbDIKRmvYY00DDCebak3");

router.post("", (req, res) => {
  const { product, token } = req.body;
  const transactionKey = uuidv4();

  stripeClient.customers.create({
    email: token.email,
    source: token.id
  }).then((customer) => {
    stripeClient.charges.create({
      amount: product.price,
      currency: "INR",
      customer: customer.id,
      receipt_email: token.email,
      description: product.name,
      
    }).then(async (result) => {
      // Save payment information to MongoDB
      console.log(result);
      const payment = new Transaction({
        transactionKey,
        product,
        amount: product.price,
        currency: "INR",
        customer: customer.id,
        receipt_email: token.email,
        description: product.name

      });
      console.log( payment );

     

      try {
        await payment.save();
        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Payment failed" });
      }
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Payment failed" });
    });
  });
});



export default router;
