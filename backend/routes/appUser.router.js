const express = require("express");
const { userSignUp } = require("../controller/appUser.controller")
const { validateUser } = require("../middlewares/appUserValidation")
const router = express.Router()

router.post("/signUp", validateUser, userSignUp);

module.exports = router