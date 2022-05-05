const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jsonwt = require("jsonwebtoken");

const signin = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashed){
        if(err){
            res.send(err)
        }
        let user = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashed
        })
        user.save()
        .then(user => {
            res.send("User Added Successfully!")
        })
        .catch(error => {
            res.send("Error Occured" + error)
        })
    })
}

const usermail = (req,res,next) => {
    User.findById(req.params.id)
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
}


const firstpage = (req,res, next) => {

    User.findByIdAndUpdate(req.body.id,{
        username : req.body.username,
        phonenumber : req.body.phonenumber,
        age : req.body.age,
        aadharcard : req.body.aadharcard,
        address : req.body.address,
        description : req.body.description,
        tags : req.body.tags,
        gender : req.body.gender,
        freetime : req.body.freetime,
        time : req.body.time
    }).then(data => {
        console.log(data)
        res.send("Your data added successfully!")
    })
    .catch(err => {
        console.log(err)
    })
}

const profile = (req,res,next) => {
    User.findByIdAndUpdate(req.body.id,{
        image : req.body.image
    })
    .then(data => {
        console.log(data)
        res.send("Image added to the database")
    })
    .catch(err => {
        console.log(err)
    })
}

const updateRating = (req,res,next) => {
    User.findByIdAndUpdate(req.body.id,{
        $inc :{
            rating : req.body.rating
        }
    }).then(data => {
        console.log(data)
        res.send("Rating's data updated")
    })
    .catch(err => {
        console.log(err)
    })
    
}

const imageUpdate = (req,res,next) => {
    User.findById(req.params.id, {
        
    })
    .then(data => {
        if(data.image == undefined){
            res.send(false)
        } else {
            res.send(true)
        }
    })
    .catch(err => {
        console.log(err);
    })
}

const deleteData = (req,res,next) => {
    User.findByIdAndDelete(req.body.id)
    .then(data => {
        console.log(data)
        res.send("Deleted...")
    })
    .catch(err => {
        console.log(err)
    })
}

const login = (req,res,next) => {
    username = req.body.email
    password = req.body.password

    User.findOne({$or : [{email : username}, {username : username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.send("Some Stupid Error on Login Session")
                }
                if(result){
                    let token = jsonwt.sign({name : user.name}, "verySecretValue", {expiresIn : '1h'})
                    res.json({
                        message : "Login Succesfull",
                        token
                    })
                } else {
                    res.send("Password doesn't match!")
                }
            })
        } else {
            res.send("No user has been found")
        }
    })
}

const checking = (req,res,next) => {
    User.find({})
    .then(data => {
        console.log(data);
        res.send(data)
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    signin, login, checking, firstpage, deleteData, usermail, updateRating, imageUpdate, profile
}