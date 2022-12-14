const express = require("express");

const { JWTAuth } = require("../config/jwt.config");
const {
  createForm,
  getById,
  getMyForms,
  reviewMyForm,
} = require("../controller/form.controller");

const router = express.Router();

router.post("/createForm", JWTAuth, createForm);
router.get("/my_forms/", JWTAuth, getMyForms);
router.get("/review_form/:id", JWTAuth, reviewMyForm);
router.get("/:id", getById);

module.exports = router;
