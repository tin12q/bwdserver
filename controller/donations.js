const Donation = require("../models/donation");
const getDonate = async (req, res) => {
    try {
        console.log("getDonate");
        const donate = await Donation.find();
        console.log(donate);
        res.json(donate);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
}
const addDonate = async (req, res) => {
    try {
        const { ho,ten,email,phoneNumber,money } = req.body;
        const newMail = new Donation({
            ho,
            ten,
            email,
            phoneNumber,
            money,
        });
        await newMail.save();
        res.json(newMail);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
}


module.exports = { getDonate, addDonate}