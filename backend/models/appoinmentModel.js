// models/appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  preferredDate: { type: Date, required: true },
  preferredTime: { type: String, required: true },
  chest: { type: Boolean, default: false },
  waist: { type: Boolean, default: false },
  hips: { type: Boolean, default: false },
  neck: { type: Boolean, default: false },
  shoulderWidth: { type: Boolean, default: false },
  sleeveLength: { type: Boolean, default: false },
  inseam: { type: Boolean, default: false },
  outseam: { type: Boolean, default: false },
  bust: { type: Boolean, default: false },
  waistWomen: { type: Boolean, default: false },
  hipsWomen: { type: Boolean, default: false },
  neckWomen: { type: Boolean, default: false },
  shoulderWidthWomen: { type: Boolean, default: false },
  sleeveLengthWomen: { type: Boolean, default: false },
  inseamWomen: { type: Boolean, default: false },
  outseamWomen: { type: Boolean, default: false },
  clothingType: { type: String },
  fabricPreference: { type: String },
  additionalComments: { type: String },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
