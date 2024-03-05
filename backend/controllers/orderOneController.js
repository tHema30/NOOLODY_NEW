import Order from '../models/orderOneModel.js';
import cloudinary from '../utils/imagecloudinary.js';


// Controller to handle creating a new order
const createOrder = async (req, res) => {
  try {
  let {measurements,orderDetails,stitchingDetails} = req.body;
    measurements=JSON.parse(measurements);
    orderDetails=JSON.parse(orderDetails);
     stitchingDetails=JSON.parse(stitchingDetails)       
    // let {measurements,orderDetails,stitchingDetails} = req.body;
    console.log(req.body)
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'Order-details',
  });
  
  const style = {
    public_id: result.public_id,
    url: result.secure_url
  };

  

  const data =await Order.create({
      measurements,orderDetails, stitchingDetails :{...stitchingDetails,style:style}
    })
    
  
 
  res.status(201).json({message:data});

  
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { createOrder, getAllOrders };
