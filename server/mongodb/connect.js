import mongoose from "mongoose";

const connectDB = (url) => {
  //search functionality
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("connected to mdb"))
    .catch((err) => console.log(err));
};

export default connectDB;
