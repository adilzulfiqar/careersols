const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const users = require('./routes/users.js');


const app = express();



// run the dist path
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// DB comfiq
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb Connected"))
    .catch(e => console.log("error", e))

app.use("/api/user", users);




// run when path not found
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"))
})



const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`server is working on port ${Port}`));