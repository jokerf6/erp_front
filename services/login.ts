import { valid } from "@/functions/validations";
import { LOGIN } from "@/static/links";
import requestService from "@/static/requests";
import { setCookie } from "cookies-next";

export async function LoginRequest(
  e: any,
  notify: any,
  router: any,
  setEmail: any,
  updateUser: any
) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const checkEmail = valid("Email", email);
  if (checkEmail !== "valid") {
    return notify(checkEmail);
  }
  // **************Test******************
  if (email.length === 0) {
    return notify("Email field can't be empty");
  }
  if (password.length === 0) {
    return notify("Password field can't be empty");
  }

  // **************Handel Request******************
  const requestJson = JSON.stringify({
    workEmail: email,
    password,
  });
  // **************Send Request******************
  await request(requestJson, notify, router, setEmail, updateUser);
}
async function request(
  requestJson: string,
  notify: any,
  router: any,
  setEmail: any,
  updateUser: any
) {
  const response = await requestService.post(
    LOGIN,
    undefined,
    false,
    requestJson
  );
  if (response.status === 200) {
    const user = response.data.data.user;
    const token = response.data.data.token;
    if (user.first) {
      localStorage.setItem("token", user.token);
      setEmail(user.email);
      router.push("/verifyemail");
    } else {
      const farFutureDate = new Date(2030, 11, 31);
      setCookie("AccessToken", token, {
        expires: farFutureDate,
      });

      router.push("/home");
    }
  } else {
    return notify(response.data.message || "Something went wrong!");
  }
}
