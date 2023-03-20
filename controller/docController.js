
// const emailServices = require('../utils/emailServices')
const docServices = require('../services/docServices')

exports.uplodeDoc = async (req, res) => {

 try {
  const { name, location, details } = req.body
  if (name && location && details) {
   const uplodedDoc = await docServices.create({ name, location, details })
   if (uplodedDoc) {
    console.log(uplodedDoc);
    res.status(200).json({ uplodedDoc });
   }
  }
 } catch (err) {
  res.status(500).json({ mesage: err.message });
 }
};

exports.getAll = async (req, res) => {
 try {
  const docs = await docServices.getAll();
  if (docs) {
   return res.status(200).json(docs)
  }
 } catch (err) {
  return res.status(500).json({ mesage: err.message });
 }
};

exports.getDocs = async (req, res, next) => {
 const id = req.params.id
 try {
  const docs = await docServices.getDocs(id);
  if (docs) {
   res.status(200).json(docs)
  }
 } catch (err) {
  res.status(400).json(err)
 }
}


