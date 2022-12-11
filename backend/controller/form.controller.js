const Form = require("../model/form");
const { StatusCodes } = require("http-status-codes")
const { NotFoundError } = require("../errors")

const createForm = async (req, res) => {
    console.log("JWT authentication passed")
}

module.exports = { createForm }