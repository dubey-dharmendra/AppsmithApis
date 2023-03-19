
const emailServices = require('../utils/emailServices')
const docServices = require('../services/docServices')
const userServices = require('../services//userServices')

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
  console.log(docs);
  if (docs) {
   return res.status(200).json(docs)
  }
 } catch (err) {
  return res.status(500).json({ mesage: err.message });
 }
};

exports.getDocByUserId = async (req, res, next) => {
 const id = req.params.id
 try {
  const user = await docServices.getDocByUserId(id);
  if (user) {
   res.status(200).json(user)
  }
 } catch (err) {
  res.status(400).json(err)
 }
}

exports.isVerifed = async (req, res) => {
 const id = req.params.id
 docCheck = ['Post Graduation Degree And Marksheet', 'Graduation degree and Marksheet', 'Aadhar Card', 'Tenth Certificate',
  'Twelfth Certificate']
 try {
  const docs = await docServices.getByUserId(id);
  if (docs) {
   const docNames = docs.map((e) => e.docName)
   if (docNames.length) {
    const hasAllElems = docCheck.every(elem => docNames.includes(elem));
    // if (!hasAllElems) {
    //  const user = await userServices.getOne(id)
    //  const { email } = user
    //  const subject = 'Required Document Did not upload'
    //  const message = `Recuired document not upload`
    //  emailServices.sendEmail({ email, subject, message })
    //  return res.status(400).json({ message: `Required document not uploaded` })
    // }
    // return res.status(200).json({ message: `No Document uploaded` })
    return hasAllElems
   }
   return res.status(200).json({ message: `All document uploded` })
  }
  return res.status(200).json({ message: `Invalid User id` })
 } catch (err) {
  return res.status(500).json({ mesage: err.message });
 }
};

