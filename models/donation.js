const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    ho: { type: String, },
    ten : { type: String, },
    email: { type: String, },
    money: { type: Number, },
    phoneNumber: { type: String, },
});

const Donation = mongoose.model('donation', projectSchema);

module.exports = Donation;