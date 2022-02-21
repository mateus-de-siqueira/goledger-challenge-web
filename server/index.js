const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


//Models exports
const RegistrationModel = require("./models/Registration");


app.use(express.json());
app.use(cors());

//Database 
mongoose.connect("mongodb+srv://Mateus:PASSWORD@crud.0lsns.mongodb.net/artist?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);

app.post("/insert", async (req, res) => {
    const tag = req.body.tag
    const label = req.body.label
    const description = req.body.description
    const writers = req.body.writers

    const resgistration = new RegistrationModel({
        tag: tag,
        label: label,
        description: description,
        writers: writers
    });

    try {
        await resgistration.save();
        res.send("Inserted data")
    } catch (err) {
        console.log(err);
    }

});

app.get("/read", async (req, res) => {
    RegistrationModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }

        res.send(result);
    })
});

//Server connection
app.listen(3001, () => {
    console.log('Server running on port 3001');
})