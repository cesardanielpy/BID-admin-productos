require ('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const puerto = process.env.PUERTO;
require('../server/config/mongoose.config');
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('../server/routes/proma.raoutes')(app);
app.listen(puerto, () => {
    console.log("Listening at Port " + puerto)
});
