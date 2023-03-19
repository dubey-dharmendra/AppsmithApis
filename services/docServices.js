const docModel = require("../models/docModel");

exports.create = async (data) => {
 return await docModel.create(data)
}

exports.getAll = async () => {
 return await docModel.find()
}

exports.getDocByUserId = async (id) => {
 return await docModel.find({ userId: id })
}

exports.checkDocByUserId = async (id) => {
 console.log(id);
 const docs = await docModel.find({ userId: id });
 console.log(docs);
 if (docs) {
  const docCheck = ['Post Graduation Degree And Marksheet', 'Graduation degree and Marksheet', 'Aadhar Card', 'Tenth Certificate',
   'Twelfth Certificate']
  const docNames = docs.map((e) => e.docName)
  if (docNames.length) {
   return docCheck.every(elem => docNames.includes(elem));
  }
 }
}