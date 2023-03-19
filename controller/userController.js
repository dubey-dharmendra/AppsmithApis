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
   const doc = await docServices.checkDocByUserId(id)
   if (doc != user.docStatus) {
    updatedDoc = await userServices.userDocStatusUpdate(id, 'notVerifed')
   }
   const newUser = await userServices.getOne(id)
   return res.status(200).json(newUser)
  }
  return res.status(200).json({ message: 'user Not Found' })
 } catch (err) {
  res.status(400).json(err)
 }
}

