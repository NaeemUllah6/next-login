import mongoose from 'mongoose'
import { unique } from 'next/dist/build/utils'
user_schema = new mongoose.schema({
    username: {
        type: String,
        required: [true, 'Please Provide User Name'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please Provide your Email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please Provide your Password'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
})

const User = mongoose.models.user || mongoose.model("users", UserSchema)
export default User