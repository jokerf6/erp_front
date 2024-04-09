import { valid } from "@/functions/validations";
import { LOGIN, TASKS } from "@/static/links";
import requestService from "@/static/requests";
import { setCookie } from "cookies-next";

export async function AddTaskFileRequest(
  file: any,
  notify: any,
  id: string,
  token: string
) {
  // **************Handel Request******************
  const formData = new FormData();
  const files = [];
  files.push(file);
  files.forEach((file, index) => {
    console.log(file);
    formData.append(`files`, file);
  });
  console.log(")))))");
  console.log(formData);
  // **************Send Request******************
  await request(formData, notify, id, token);
}
async function request(
  requestJson: any,
  notify: any,
  id: string,
  token: string
) {
  const response = await requestService.post(
    TASKS + "/" + id + "/file",
    token,
    true,
    requestJson
  );
  console.log("jkjkj");
  console.log(response);
  if (response.status !== 200) {
    return notify("Something went wrong!");
  }
  return response;
}
