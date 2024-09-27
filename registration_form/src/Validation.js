export default function SignupValidation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.first_name) error.first_name = "First name shouldn't be empty";

  if (!values.last_name) error.last_name = "Last name shouldn't be empty";

  if (!values.email) {
    error.email = "Email shouldn't be empty";
  } else if (!email_pattern.test(values.email))
    error.email = "Email is Incorrect";

  if (!values.password) {
    error.password = "Password shouldn't be empty";
  }
  // else if (values.password.length < 4) {
  //   error.password = "Password must be more than 4 characters";
  // } else if (values.password.length > 10) {
  //   error.password = "Password cannot exceed more than 10 characters";
  // }
  return error;
}

export function LoginValidation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    error.email = "Email shouldn't be empty";
  } else if (!email_pattern.test(values.email))
    error.email = "Email is Incorrect";

  if (!values.password) {
    error.password = "Password shouldn't be empty";
  }
  // else if (values.password.length < 6)
  //   error.password = "Atleast 6 characters required";
  // else error.password = "";

  return error;
}
