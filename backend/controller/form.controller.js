const Form = require("../model/form");
const { StatusCodes } = require("http-status-codes")
const { NotFoundError } = require("../errors");
const { validateFormBody } = require("../service/form.service");

const createForm = async (req, res) => {
    req.body.creatorID = req.user.userId;
    await validateFormBody(req.body.formData);
    const form = await Form.create(req.body);

    res.status(StatusCodes.CREATED).json(form);
}

module.exports = { createForm }