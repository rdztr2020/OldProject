import mongoose from "mongoose"

export const connectDB =async () => {
    await mongoose.connect('mongodb+srv://slee12463:Fuckyou2@cluster0.0rcoy.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
    
}

export default connectDB;