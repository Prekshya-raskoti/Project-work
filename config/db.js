import mongoose from "mongoose";

 export const connectDB = async ()=> {
    await mongoose.connect('// mongodb+srv://prekshyaraskoti:PreKsShHEllo@cluster0.dy4we.mongodb.net/FOOD ORDERING WEB APP').then(()=>console.log("DB Connected"));
}