import { valid } from "@/functions/validations";
import { LOGIN, TASKS } from "@/static/links";
import requestService from "@/static/requests";
import { setCookie } from "cookies-next";

export async function AddCommentRequest(
  text: string,
  notify: any,
  id: string,
  token: string,
  setAddComment: any,
  edit: boolean
) {
  // **************Test******************
  if (text.length === 0) {
    return notify("Comment field can't be empty");
  }

  // **************Handel Request******************
  const requestJson = JSON.stringify({
    text,
  });
  // **************Send Request******************
  await request(requestJson, notify, id, token, setAddComment, edit);
}
async function request(
  requestJson: string,
  notify: any,
  id: string,
  token: string,
  setAddComment: any,
  edit: boolean
) {
  const response = edit
    ? await requestService.patch(
        TASKS + "/" + id + "/comment",
        token,
        false,
        requestJson
      )
    : await requestService.post(
        TASKS + "/" + id + "/comment",
        token,
        false,
        requestJson
      );
  if (response.status === 200) {
    setAddComment(false);
  } else {
    return notify(response.data.message || "Something went wrong!");
  }
}
