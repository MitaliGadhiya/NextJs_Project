import * as yup from "yup";


const RegisterSchema = yup.object({
    fname: yup.string().required("First Name is required").min(2, "At least 2 characters"),
    lname: yup.string().required("Last Name is required").min(2, "At least 2 characters"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  });

const LoginSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
})

  export {RegisterSchema, LoginSchema};
