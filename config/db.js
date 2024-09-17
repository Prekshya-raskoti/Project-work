// import mongoose from "mongoose";

//  export const connectDB = async ()=> {
//     await mongoose.connect('// mongodb+srv://prekshyaraskoti:PreKsShHEllo@cluster0.dy4we.mongodb.net/food ordering web app').then(()=>console.log("DB Connected"));
// }
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://prekshyaraskoti:PreKsShHEllo@cluster0.dy4we.mongodb.net/food_ordering_web_app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    process.exit(1); // Exit the process with failure
  }
};
