export function valid(type: string, text: string): any {
  if (type === "Email") {
    return checkEmail(type, text);
  }
  if (type === "Password") {
    return checkPassword(type, text);
  }
}

function checkEmail(type: string, text: string) {
  const reg = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
  const test = reg.test(text);
  if (text.length === 0) {
    return `${type} field cannot be empty`;
  }

  if (test) {
    return "valid";
  } else {
    return "Not valid Email";
  }
}
function checkPassword(type: string, text: string) {
  const reg = /(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (text.length === 0) {
    return `${type} field cannot be empty`;
  }

  if (reg.test(text)) {
    return "valid";
  } else {
    return "Not Strong password";
  }
}
