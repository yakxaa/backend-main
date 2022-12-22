"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
//Employee SCHEMA
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    instagramURL: {
        type: String,
    },
    youtubeURL: {
        type: String,
    },
}, {
    timestamps: true,
});
//EXPORTING MODEL
exports.UserModel = (0, mongoose_1.model)("User", exports.UserSchema);
