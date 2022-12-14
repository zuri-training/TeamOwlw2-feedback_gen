const Form = require("../model/form");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const { validateFormBody } = require("../service/form.service");

const createForm = async (req, res) => {
  req.body.creatorID = req.user.userId;
  await validateFormBody(req.body.formData);
  const form = await Form.create(req.body);

  res.status(StatusCodes.CREATED).json({ success: true, data: form });
};

const getById = async (req, res) => {
  const { id: formID } = req.params;
  const form = await Form.findOne(
    { _id: formID },
    "_id category organisationName formData"
  );
  if (!form) {
    throw new NotFoundError("Resourse not found");
  }

  res.status(StatusCodes.OK).json({ success: true, data: form });
};

const getMyForms = async (req, res) => {
  const forms = await Form.find(
    { creatorID: req.user.userId },
    "category organisationName noOfResponses"
  ).sort("updatedAt");

  res.status(StatusCodes.OK).json({ success: true, data: { forms, nbHits: forms.length } })
};

const reviewMyForm = async (req, res) => {
    const { id: formID } = req.params

    const form = await Form.findOne({ _id: formID, creatorID: req.user.userId })

    if (!form) {
        throw new NotFoundError("Resource not found");
    }

    res.status(StatusCodes.OK).json({ success: true, data: form })
}

module.exports = { createForm, getById, getMyForms, reviewMyForm };
