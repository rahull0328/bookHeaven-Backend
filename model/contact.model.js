import mongoose from "mongoose";

const contactUsSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

const Contact = mongoose.model("Contact", contactUsSchema);

export default Contact;