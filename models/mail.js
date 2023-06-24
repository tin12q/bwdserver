const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema({
    email: { type: String },
});

const Mail = mongoose.model('mail', mailSchema);

module.exports = Mail;