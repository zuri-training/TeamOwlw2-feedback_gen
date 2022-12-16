const mongoose = require("mongoose");

const FormResponseSchema = new mongoose.Schema({
    formID: {
        type: mongoose.Types.ObjectId,
        ref: "AppUser",
        required: true
    },
    responseData: {
        type: Map,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("FormResponse", FormResponseSchema);