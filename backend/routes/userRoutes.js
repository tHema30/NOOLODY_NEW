import express from 'express';
const router = express.Router();
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    createUser
    
  } 
from '../controllers/userController.js';

// import {service,getservices,getserviceId,deleteserviesId ,UpdateService } from '../controllers/serviceController.js'
import { protect ,isAdmin } from '../middleware/authMiddleware.js';
import  {Order} from '../controllers/orderController.js';
import { tailors } from '../controllers/tailorsControllers.js';
import nodemailer from 'nodemailer';
// import upload from '../utils/multer.js';




// user Full 

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);
router.post('/createuser',createUser)




//tailors order booking
router.post('/orders',Order );



//tailors profile details
router.post('/tailors', tailors );




// Contact crud-----------------------------------------------------
router.post('/email', async (req, res) => {
    const { name, email, message } = req.body;
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
      },
    });
    // Email options
    const mailOptions = {
      from: email,
      to: 'tkematharsini03@gmail.com',
      subject: 'NOOLODY Customers',
      text: `Name: ${name}\nEmail: ${email}\nMessage:${message}`,
    };
    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message send successfully!' });
      console.log(mailOptions)
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending the email. Please try again.' });
    }
  });



export default router;