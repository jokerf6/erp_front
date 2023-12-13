export function valid(type: string, text: string): string {
  if (text.length === 0) {
    return `${type} field cannot be empty`;
  }

  if (type === "Email") {
    checkEmail(text);
  }
  if (type === "Password") {
    checkPassword(text);
  }

  return "valid";
}

function checkEmail(text: string) {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (reg.test(text)) {
    return "valid";
  } else {
    return "Not valid Email";
  }
}
function checkPassword(text: string) {
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  if (reg.test(text)) {
    return "valid";
  } else {
    return "Not Strong password";
  }
}
