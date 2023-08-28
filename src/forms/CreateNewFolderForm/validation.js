import * as yup from "yup";

const requiredField = "* This field is required";
const CreateNewFolderSchema = yup.object().shape({
  name: yup.string().required(requiredField),
});

export default CreateNewFolderSchema;
