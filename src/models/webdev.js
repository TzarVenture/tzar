import mongoose from "mongoose";

const webdevSchema = new mongoose.Schema(
    {
        websitesdevelopment: {
            type: String,
            required: false,  // Optional, since it depends on user selection
        },
        socialmedia: {
            type: String,
            required: false,  // Optional
        },
        performancemarketing: {  // Corrected typo
            type: String,
            required: false,  // Optional
        },
        influencermarketing: {
            type: String,
            required: false,  // Optional
        },
        brandmarketing: {
            type: String,
            required: false,  // Optional
        },
        searchengineoptimization: {
            type: String,
            required: false,  // Optional
        },
        productshoot: {
            type: String,
            required: false,  // Optional
        },
        animation: {
            type: String,
            required: false,  // Optional
        },
        logodesign: {
            type: String,
            required: false,  // Optional
        },
        productpackaging: {
            type: String,
            required: false,  // Optional
        },
        domain: {
            type: String,
            required: true,  // Required as per your original structure
        },
        requirmentmsg: {
            type: String,
            required: true,  // Required as per your original structure
        },
        fullname: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        termscondition: {
            type: Boolean,  // Changed to Boolean since it's a checkbox for agreeing to terms
            required: true,
        },
    },
    {
        timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
    }
);

const Webdev = mongoose.models.Webdev || mongoose.model('Webdev', webdevSchema);

export default Webdev;