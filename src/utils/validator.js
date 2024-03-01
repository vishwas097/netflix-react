export const validator = (email, password, username) => {
  const isValidEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isValidName = username.length >= 5;

  if (username !== false && !isValidName)
    return "The name must consist of at least 5 characters.";
  if (!isValidEmail) return "Email is invalid";
  if (!isValidPassword) return "Password doesnot meets the expectation";
  return null;
};
