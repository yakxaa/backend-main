"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterModel = exports.NewsletterSchema = void 0;
const mongoose_1 = require("mongoose");
exports.NewsletterSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
exports.NewsletterModel = (0, mongoose_1.model)("Newsletter", exports.NewsletterSchema);
