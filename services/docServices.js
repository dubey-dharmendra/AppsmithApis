const docModel = require("../models/docModel");
const userModel = require("../models/userModel");
const userServices = require("./userServices");

exports.create = async (data) => {
 return await docModel.create(data)
}

exports.getAll = async () => {
 return await docModel.find()
}
exports.getDocs = async (id) => {
 return await docModel.find({ userId: id })
}
exports.getDocByUserId = async (id) => {
 let docs = await docModel.find({ userId: id })
 const user = await userModel.findById(id)
 if (docs) {
  const docCheck = ['Pan Card', 'Graduation degree and Marksheet', 'Aadhar Card', 'Tenth Certificate',
   'Twelfth Certificate']
  const docNames = docs.map((e) => e.docName)
  if (docNames.length) {
   const requiredDoc = docCheck.every(elem => docNames.includes(elem));
   if (requiredDoc) {
    if (user.docStatus == 'notVerifed') {
     const userDocStatusUpdated = await userServices.userDocStatusUpdate(id, 'verified')
    }
   } else {
    if (user.docStatus == 'verifed') {
     const userDocStatusUpdated = await userServices.userDocStatusUpdate(id, 'notVerified')
    }
   }
  }
 }
 return docs.map((e) => e.docName)
}
