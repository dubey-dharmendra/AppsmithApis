const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
 try {
  const con = await mongoose.connect(DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  });
  console.log(`DataBaseConnect successfully`);
 } catch (e) {
  console.log(e);
 }
};

module.exports = connectDB;