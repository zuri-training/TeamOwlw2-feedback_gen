const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    creatorID: {
        type: mongoose.Types.ObjectId,
        ref: "AppUser",
        required: true
    },
    category: { //eg: business, student, etc
        type: String,
        required: true,
        minLength: 3
    },
    organisationName: {
        type: String
    },
    form_data: {
        type: Map,
        required: true
    },
    noOfResponses: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model("Form", FormSchema);