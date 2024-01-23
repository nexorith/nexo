import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    adminname: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    forgotPasswordToken: String
    , forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
},
    {
        timestamps: true,
    });

export default mongoose.models.Admin || mongoose.model('Admin', UserSchema);
