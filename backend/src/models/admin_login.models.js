import mongoose from 'mongoose';
const adminLoginDetails = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String },
    belongsto: { type: String },
    lastLogin: { type: Date }, // <-- Add this line
}, { collection: 'admin_login' });

adminLoginDetails.methods.isPasswordCorrect = async function(password){
    return await this.password === password;
}

export const adminLogin = mongoose.model("admin_login", adminLoginDetails);