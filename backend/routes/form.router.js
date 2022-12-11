const express = require("express");

const { createForm } = require("../controller/form.controller")
const { JWTAuth } = require("../config/jwt.config")

const router = express.Router();

router.post("/createForm", JWTAuth, createForm);

module.exports = router;