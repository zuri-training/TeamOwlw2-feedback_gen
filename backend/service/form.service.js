const { BadRequestError } = require("../errors");

const validateFormBody = async (formData) => {
  const QuestionType = {
    ShortAnswer: "shortAnswer",
    Paragraph: "paragraph",
    MultipleChoice: "multipleChoice",
    CheckBox: "checkBoxes",
    Dropdown: "dropdown",
    FileUpload: "fileUpload",
    LinearScale: "linearScale",
    MultipleChoiceGrid: "multipleChoiceGrid",
    CheckBoxGrid: "checkBoxGrid",
    Date: "date",
    Time: "time",
  };

  for (const question in formData) {
    let qType = formData[question];

    if (typeof qType === "object") {
      qType = formData[question][0];
    }

    if (qType.startsWith("*")) {
      qType = qType.split(" ")[1];
    }

    switch (qType) {
      case QuestionType.ShortAnswer:
        break;
      case QuestionType.Paragraph:
        break;
      case QuestionType.MultipleChoice:
        const checkMPDataType = formData[question];
        if (checkMPDataType !== "object" && !(checkMPDataType.length > 0)) {
          throw new BadRequestError("Error from Multiple choice question type");
        }
        break;
      case QuestionType.CheckBox:
        break;

      // Validation for drop down question type
      case QuestionType.Dropdown:
        const checkDataType = formData[question];
        if (checkDataType !== "object" && !(checkDataType.length > 0)) {
          throw new BadRequestError("Error from Drop Down question type");
        }
        break;
      case QuestionType.FileUpload:
        // Come back
        break;

      // Validation for linear scale question type
      case QuestionType.LinearScale:
        const scaleConstraints = formData[question][1];

        let holdStartValue;
        for (const constraint in scaleConstraints) {

          switch (constraint) {
            case "start":
              const startValue = scaleConstraints[constraint];

              checkIntegerType(startValue);

              // Ensure scale starts from either 0 or 1
              if (startValue !== 0 && startValue !== 1) {
                console.log(startValue)
                throw new BadRequestError(
                  "Error from linear scale question. scale should start from either 0 or 1"
                );
              }
              holdStartValue = startValue;
              break;
            case "end":
              const endValue = scaleConstraints[constraint];
              checkIntegerType(endValue);

              // Ensure end scale is between start scale and 10
              if (endValue > holdStartValue && endValue <= 10) { 

              } else {
                throw new BadRequestError(
                  "Error from linear scale question. scale should have an end value between start value and 10"
                );
              }
              break;
            case "startLabel":
              break;
            case "endLabel":
              break;
            default:
              throw new BadRequestError("Invalid linear scale constraint");
              break;
          }
        }
        break;

      // Multiple choice grid question type validation
      case QuestionType.MultipleChoiceGrid:
        const MCgridOptions = formData[question][1];

        for (const option in MCgridOptions) {
          if (option !== "rows" && option !== "columns") {
            throw new BadRequestError(
              "Incorrect options in Multiple Choice Grid question type"
            );
          }
        }
        break;

      // Check box grid question type validation
      case QuestionType.CheckBoxGrid:
        const gridOptions = formData[question][1];

        for (const option in gridOptions) {
          if (option !== "rows" && option !== "columns") {
            throw new BadRequestError(
              "Incorrect options in Multiple Choice Grid question type"
            );
          }
        }

        break;
      case QuestionType.Date:
        break;
      case QuestionType.Time:
        break;
      default:
        throw new BadRequestError("Invalid question type");
        break;
    }
  }

  return;
};

const checkIntegerType = (variable) => {
  if (typeof variable !== "number") {
    throw new BadRequestError(
      "Error from linear scale question. start and end must be an integer"
    );
  }
};

module.exports = { validateFormBody };
