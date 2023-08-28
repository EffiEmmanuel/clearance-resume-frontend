import * as yup from "yup";

const requiredField = "* This field is required";
const AddResumeToFolderFormSchema = yup.object().shape({
  folder: yup.string().required(requiredField),
});

export default AddResumeToFolderFormSchema;
