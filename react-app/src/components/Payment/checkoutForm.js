// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import StripeCheckout from 'react-stripe-checkout';

// import axios from 'axios';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     const { token, error } = await stripe.createToken(elements.getElement(CardElement));

//     if (error) {
//       console.error(error);
//     } else {
//       try {
//         const response = await axios.post('http://localhost:7300/api/payment', {
//           items: ['item1', 'item2'], // Replace with your actual items
//           totalAmount: 100, // Replace with your actual total amount
//           tokenId: token.id,
//         });

//         console.log(response.data.message);
//       } catch (error) {
//         console.error('Payment failed:', error.message);
//       }
//     }
//   };

//   return (

//     <form onSubmit={handlePayment}>
//       <CardElement />
//       {/* <StripeCheckout/> */}
//       <button type="submit">Pay</button>
//     </form>
//   );
// };

// export default CheckoutForm;
