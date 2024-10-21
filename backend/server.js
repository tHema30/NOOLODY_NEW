
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"

import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 7100;
import userRoutes from './routes/userRoutes.js';
import dressDesignRoutes from './routes/dressDesignRoutes.js';
import adminRoute from './routes/adminRoute.js'
// import DressDesign from './models/dressDesignModel.js'
import serviceRoutes from './routes/serviceRoutes.js'
import Payment from './utils/Payment.js';
import orderRoutes from './routes/orderRoutes.js'
import addtoCartRoutes from './routes/addtoCartRoutes.js';
// import stripeOrder from "../backend/routes/stripeOrder.js";
// import stripe from "../backend/routes/stripe.js";

dotenv.config();

const  mongoString =process.env.DATABASE_URL 
// console.log("MongoDB URI:", process.env.DATABASE_URL);

const app = express();
mongoose.connect(mongoString)
const database  = mongoose.connection


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());
app.use(
    cors({
      origin: ["http://localhost:3000","https://noolody-new.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
// Dress Design routes
app.use('/api/users', userRoutes);
app.use('/api/designs', dressDesignRoutes )
// Use image routes
app.use('/api/admin', adminRoute );
app.use ('/api/users', serviceRoutes)
app.use('/payment',Payment)
app.use('/orders',orderRoutes)
app.use('/api/cart', addtoCartRoutes);
// app.use("/api/orders", stripeOrder);
// app.use("/api/stripe", stripe);



app.get('/', (req, res) => res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);
// app.post('/api/upload', upload.single('designImage'), uploadDressDesign); //////////////////////////////////

app.listen(port, () => console.log(`Server started on port ${port}`));

//database connection server 
database.on('error',(error) => {
    console.log(error)
})

database.once('connected',()=>{
    console.log('Database Connected successfully')
})
