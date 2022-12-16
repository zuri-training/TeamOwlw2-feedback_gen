const { BadRequestError } = require("../errors")

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

    if (typeof formData[question] === "object") {
        qType = formData[question][0]
        console.log(qType)
    }

    if (formData[question].startsWith("*")) {
        qType = formData[question].split(" ")[1];
    }

    switch (qType) {
      case QuestionType.ShortAnswer:
        break;
      case QuestionType.Paragraph:
        break;
      case QuestionType.MultipleChoice:
        break;
      case QuestionType.CheckBox:
        break;
      case QuestionType.Dropdown:
        break;
      case QuestionType.FileUpload:
        // Come back
        break;
      case QuestionType.LinearScale:
        break;
      case QuestionType.MultipleChoiceGrid:
        break;
      case QuestionType.CheckBoxGrid:
        break;
      case QuestionType.Date:
        break;
      case QuestionType.Time:
        break;
      default:
        throw new BadRequestError("Invalid question type")
        break;
    }
  }

  return;
};

module.exports = { validateFormBody };
