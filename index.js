const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 1337;
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

const connectDB = require('./models/database');
connectDB();

const { getMail, addMail } = require('./controller/mail');
const { getDonate, addDonate } = require('./controller/donations');

app.get('/mail',getMail);
app.post('/mail', addMail);
app.get('/donate', getDonate);
app.post('/donate', addDonate);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});