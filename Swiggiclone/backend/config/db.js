const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
     "mongodb+srv://Snehashree:snehashree@cluster0.s3czzu3.mongodb.net/swiggy-clone"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;