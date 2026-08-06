import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        // message: {
        //     type: String,
        //     required: true,
        // },
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
        services: {
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
        checkbox: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, 
    })

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default  Contact;