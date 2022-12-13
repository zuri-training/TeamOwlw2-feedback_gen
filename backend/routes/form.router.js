const express = require("express");

const { JWTAuth } = require("../config/jwt.config");
const { createForm, getById } = require("../controller/form.controller");

const router = express.Router();

router.post("/createForm", JWTAuth, createForm);
router.route("/:id").get(getById);

module.exports = router;
