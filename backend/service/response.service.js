const Form = require("../model/form");
// const FormResponse = require("../model/form.response");
const { NotFoundError, BadRequestError } = require("../errors");

const formResponseValidation = async (formID, responseBody) => {
  // console.log(responseBody)
  const responseForm = await getForm(formID);

  const [ formQuestions, responseBodyQuestions ] = populate2Arrays(
    responseForm.formData,
    responseBody
  );

  if (formQuestions.length !== responseBodyQuestions.length) {
    throw new BadRequestError("Invalid form response");
  }

  checkQuestions(formQuestions, responseBodyQuestions);
  console.log("Passed!")

  console.log(formQuestions);
  console.log(responseBodyQuestions);
};

const getForm = async (formID) => {
  const form = await Form.findOne({ _id: formID });

  if (!form) {
    throw new NotFoundError("Resourse not found or has been deleted");
  }

  return form;
};

const populate2Arrays = (savedForm, responseBody) => {
  const formQuestions = [];
  const responseBodyQuestions = [];

  for (const entity in savedForm) {
    formQuestions.push(entity);
  }

  for (const entity in responseBody) {
    responseBodyQuestions.push(entity);
  }

  return [formQuestions, responseBodyQuestions];
};

// Check if questions in saved form and response are same.
const checkQuestions = (savedFormQuestions, responseQuestions) => {
  for (let i = 0; i < savedFormQuestions.length; i++) {
    if (savedFormQuestions[i] !== responseQuestions[i]) {
      throw new BadRequestError(`'${responseQuestions[i]}' is not on the saved form`)
    }
  }

  return;
}

module.exports = { formResponseValidation };
