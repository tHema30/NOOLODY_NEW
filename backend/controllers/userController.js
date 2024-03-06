import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'
import nodemailer from 'nodemailer';
import { tailorsProfile } from '../models/tailorModel.js';



//@desc   Register a new user
//route POST/api/users/auth
//@access Public


const registerUser = asyncHandler (async (req, res) =>{
const { name, email, password } = req.body;

const userExists = await User.findOne({ email });

if (userExists) {
    res.status(400);
    throw new Error('User already exists');
}

const user = await User.create({
    name,
    email,
    password
});

if (user) {
    generateToken(res, user._id);
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        success:true, 
        message :"welcome"
    });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASS
        }
      });
      var mailOptions = {
        from : 'Noolodyofficial@gmail.com',
        to : user.email ,
        subject : 'Message From  New Registration',
        html : `
        <h5>Hello your are succesfully Registered  <h5/>
        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('id sent: ' + info.response);
        }
      });
  }else{
      res.status(200)
      throw new Error ("Invaild data")
  }
}); 

//@desc   Auth user/settoken
//route POST/api/users/auth
//@access Public


const authUser = asyncHandler (async (req, res) =>{
  const { email, password } = req.body;
  
  const user = await User.findOne({ email});
  
  if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
    

      res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: user.token,

          success:true, 
          message :"Welcome to NOOLODY"
      });
  } else {
      res.status(401);
      throw new Error('Invalid email or password');
  }
  
  });
//@desc   Get User Profile
//route POST/api/users/profile
//@access Private


const getUserProfile = asyncHandler (async (req, res) =>{
    try {

      const user =await User.findById(req.user._id);
      if(user){
        if(user.role=="Tailor"){
          const tailor= await tailorsProfile.findOne({userId: user._id} );
          
          res.status(200).json({user:user,tailor:tailor});
        }else{
          res.status(200).json(user);
    }
       }
      
    } catch (error) {
      res.status(500).json(error);
    }
  
      
      });
      

//@desc   Update User Profile
//route Put/api/users/profile
//@access Public


const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(req.body.active);
  let updateTailor;
  if (user) {
     user.name = req.body.name || user.name;
     user.email = req.body.email || user.email;

     if (req.body.password) {
      user.password = req.body.password;
     }
     if(user.role=="Tailor"){
      const tailor= await tailorsProfile.findOne({userId: user._id} );
         tailor.experience=req.body.tailor.experience||tailor.experience;
         tailor.contact=req.body.tailor.contact||tailor.contact;
         tailor.occupation=req.body.tailor.occupation||tailor.occupation;
         tailor.dob=req.body.tailor.idnumber||tailor.idnumber;
         tailor.gender=req.body.tailor.gender||tailor.gender;
         tailor.address=req.body.tailor.address||tailor.address;

         if(req.body.active==true){
          tailor.active=true
         }else if(req.body.active==false){
          tailor.active=false
          
         }

         updateTailor=await tailor.save();
         console.log(updateTailor);
    }

     const updatedUser = await user.save();

     res.status(200).json({
       _id: updatedUser._id,
       name: updatedUser.name,
       email: updatedUser.email,
       role: updatedUser.role,
       updateTailor:updateTailor,

       success: true,
     });
  } else {
      res.status(404);
      throw new Error('User not found')
  }

  
  });


//@desc   Logout user
//route POST/api/users/auth
//@access Public


const logoutUser = asyncHandler (async (req, res) =>{
    console.log("loguot");
    res.cookie('jwt', 'none', {
      expires: new Date(Date.now() + 5 * 1000),
      httpOnly: true,
  });

    res.status(200).json({ message:'User logged out'});
    });

    const createUser = asyncHandler(async (req, res) => {
      const { name, password, email } = req.body;
    
      // Validate request data (you may want to add more validation)
      if (!name || !password || !email) {
        return res.status(400).json({ success: false, message: 'Invalid data' });
      }
    
      // Check if the user already exists
      const userExists = await User.findOne({ email });
    
      if (userExists) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }
    
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);
    
      // Create a new user
      const newUser = new User({
        name,
        password: hashedPassword,
        email,
      });
    
      // Save the user to the database
      await newUser.save();
    
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    });



    export{
        registerUser,
        authUser,
        getUserProfile,
        updateUserProfile,
        logoutUser,
      createUser

    };

