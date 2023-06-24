const Mail = require("../models/mail");
const getMail = async (req, res) => {
    try {
        const mail = await Mail.find();
        res.json(mail);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
}
const addMail = async (req, res) => {
    try {
        const { email } = req.body;
        const newMail = new Mail({
            email,
        });
        await newMail.save();
        res.json(newMail);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
}


module.exports = { getMail, addMail}