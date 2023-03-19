const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const docSchema = new mongoose.Schema({
 docName: {
  type: String,
  required: [true, "Please tell your document Name"],
  trim: true,
 },
 userId: {
  type: ObjectId,
  ref: "users",
  required: true
 },
 docUrl: {
  type: String
 },
 isDocVerified: {
  type: Boolean, default: false
 },
 isDocUploaded: {
  type: Boolean, default: false
 },
},
 { timestamps: true }
)
module.exports = mongoose.model("docs", docSchema);

