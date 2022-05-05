const express = require("express");
const router = express.Router()

const AuthenticationController = require('../controllers/Authetication')

router.post('/signin', AuthenticationController.signin)
router.post('/login', AuthenticationController.login)
router.get('/',AuthenticationController.checking)
router.post('/firstpage', AuthenticationController.firstpage)
router.post('/delete', AuthenticationController.deleteData)
router.get("/usermail/:id", AuthenticationController.usermail)
router.post('/ratings', AuthenticationController.updateRating)
router.get("/image/:id", AuthenticationController.imageUpdate)
router.post("/profile", AuthenticationController.profile)

module.exports = router;