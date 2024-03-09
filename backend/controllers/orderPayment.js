import stripe from 'stripe';
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
import OrderPayment from '../models/orderPayment.js';

const payment = {
    processPayment: async (req, res) => {
      const { items, totalAmount, token } = req.body;
  
      try {
        const charge = await stripeInstance.charges.create({
          amount: totalAmount * 100, // Convert to cents
          currency: 'usd',
          source: token.id,
          description: 'Payment for your order',
        });
  
        const order = new OrderPayment({
          items,
          totalAmount,
        });
  
        await order.save();
  
        res.status(200).json({ message: 'Payment successful', charge });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Payment failed', error: error.message });
      }
    },
  };
  
  export default payment;