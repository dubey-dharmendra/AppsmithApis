const userModel = require("../models/userModel");

exports.getOne = async (id) => {
 return await userModel.findById(id);
}

exports.getAll = async () => {
 return await userModel.find();
}

exports.userDocStatusUpdate = async (id, doc) => {
 return await userModel.findByIdAndUpdate({ _id: id },
  { docStatus: doc },
  { new: true });
}