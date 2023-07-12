import * as yup from "yup";

const requiredField = "* This field is required";
const SignupFormSchema = yup.object().shape({
  fullName: yup.string().required(requiredField),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required(requiredField),
  password: yup
    .string()
    .min(8, "Password cannot be less than 8 characters")
    .required(requiredField),
});

export default SignupFormSchema;
