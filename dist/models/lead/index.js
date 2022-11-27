"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadModel = exports.LeadSchema = void 0;
const mongoose_1 = require("mongoose");
exports.LeadSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    // type_of_organization: {
    //   type: String,
    //   required: true,
    // },
    organization_name: {
        type: String,
        required: true,
    },
    message: String,
    video_link: String,
}, {
    timestamps: true,
});
exports.LeadModel = (0, mongoose_1.model)("Lead", exports.LeadSchema);
