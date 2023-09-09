import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type: String,  
        required: true,
    }
},{
    timestamps: true,
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;