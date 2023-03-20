const userServices = require('../services//userServices')
const docServices = require('../services//docServices')

exports.getAll = async (req, res, next) => {

 try {
  const user = await userServices.getAll();
  if (user) {
   res.status(200).json(user)
  }
 } catch (err) {
  res.status(400).json(err)
 }

}

exports.getOne = async (req, res, next) => {
 const id = req.params.id
 try {
  const user = await userServices.getOne(id);
  if (user) {
   const userDocs = await docServices.getDocByUserId(id)
   let userData = await userServices.getOne(id);
   const { email, name, docStatus, role, isVerified } = userData
   const newUser = { email, name, docStatus, role, isVerified, doc: userDocs }

   return res.status(200).json(newUser)
  }
  return res.status(200).json({ message: 'user Not Found' })
 } catch (err) {
  res.status(400).json(err)
 }
}

