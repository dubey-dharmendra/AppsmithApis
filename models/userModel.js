
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Please tell your  Name"],
  trim: true,
 },
 email: {
  type: String,
  required: [true, "Please tell your  Email"],
  trim: true,
 },
 docStatus: {
  type: String,
  enum: ['verifed', 'notVerified'],
  default: 'notVerified'
 },
 role: {
  type: String,
  enum: ['user', 'admin'],
  default: "user"
 },
 isVerified: {
  type: Boolean, default: false
 },

})
module.exports = mongoose.model("users", userSchema);






