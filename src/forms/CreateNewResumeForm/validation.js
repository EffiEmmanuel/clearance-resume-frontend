import * as yup from "yup";

const requiredField = "* This field is required";
const CreateNewResumeSchema = yup.object().shape({
  name: yup.string().required(requiredField),
});

export default CreateNewResumeSchema;
