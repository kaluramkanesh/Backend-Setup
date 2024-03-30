const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const ObjectId = mongoose.Schema.Types.ObjectId

const user_schema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    email: {

    },
    fullname: {

    },
    avatar: {
        type: String,//cloudynary url
        required: true

    },
    conver_image: {
        type: String
    },
    watch_history: [
        {
            type: ObjectId,
            ref: 'video'
        }
    ],
    password: {
        type: String,
        required: [true, 'password is required']
    },
    refresh_token: {
        type: String
    }

}, { timestamps: true })

user_schema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    }
    this.password = bcrypt.hash(this.password, 10)
    next()
})
user_schema.methods.is_password_correct = async function (password) {
    return await bcrypt.compare(password, this.password)
}
user_schema.methods.generate_access_token = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        user_name: this.user_name
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.Access_TOKEN_EXPIRY })

}
user_schema.methods.generate_refresh_token = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        user_name: this.user_name
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRY })

}
module.exports = mongoose.model("user", user_schema)