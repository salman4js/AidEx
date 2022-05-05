const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(cors());


require('./models/User')

app.use(bodyParser.json({limit: '20mb'}));

const AuthRoute = require('./routes/AuthRoute')


const Datab = mongoose.model("user")

const mongodbURl = "mongodb+srv://<user_name>:<password_here>@cluster0.netps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongodbURl,{
    useNewUrlParser : true,
})

mongoose.connection.on("connected", () => {
    console.log("Database Connected");
})

mongoose.connection.on("error", (err) => {
    console.log("Some Stupid error", err)
})

app.use("/", AuthRoute)


app.listen(3002,() => {
    console.log("Server is runninng!");
})
