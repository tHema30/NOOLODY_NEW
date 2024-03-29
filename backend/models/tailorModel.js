import mongoose from "mongoose";


const tailorsProfileSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
 
   name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true,
        
    },
    experience: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    idnumber: {
        type: String,
        required: true
    },
    dob: { 
        type: Date,
     required: true 
    },
    gender: { type: String, 
    enum: ['Male', 'Female', 'Other'], 
    required: true },

    
    verified: { type: Boolean, default: false },
    active: {type:Boolean ,default:false},

    orderHistory:Array,

}, {
    timestamps: true
});




const tailorsProfile = mongoose.model('tailorsProfile', tailorsProfileSchema);

export {tailorsProfile}