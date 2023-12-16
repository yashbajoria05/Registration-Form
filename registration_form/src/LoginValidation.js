function LoginValidation(values) {
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
export default LoginValidation;
