export default function SignupValidation(values) {
  let error = {};
  const email_pattern = "/[a-zA-Z0-9]+\\. [a-zA-Z0-9]+@gmail\\.com/";
  const password_pattern =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[!@#$%^&*?])[A-Za-zd!@#$%^&*?]{6,}$";

  if (values.first_name === "")
    error.first_name = "First name shouldn't be empty";
  else error.first_name = "";

  if (values.last_name === "") error.last_name = "Last name shouldn't be empty";
  else error.last_name = "";

  if (values.email === "") error.email = "Email shouldn't be empty";
  //   else if (!email_pattern.test(values.email))
  //     error.email = "Email is Incorrect";
  else error.email = "";

  if (values.password === "") error.password = "Password shouldn't be empty";
  //   else if (!password_pattern.test(values.password))
  //     error.password = "Password is Incorrect";
  else error.password = "";

  return error;
}

export function LoginValidation(values) {
  let error = {};
  const email_pattern = "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$";
  const password_pattern =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,}$";

  if (values.email === "") error.email = "Email shouldn't be empty";
  // else if (!email_pattern.test(values.email))
  //   error.email = "Email is Incorrect";
  else error.email = "";

  if (values.password === "") error.password = "Password shouldn't be empty";
  // else if (!password_pattern.test(values.password))
  //   error.password = "Password is Incorrect";
  else error.password = "";

  return error;
}
