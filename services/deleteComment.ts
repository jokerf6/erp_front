import { TASKS } from "@/static/links";
import requestService from "@/static/requests";

export async function DeleteCommentRequest(
  id: string,
  notify: any,
  token: string,
  setAddComment: any
) {
  const response = await requestService.delete(TASKS + "/comment/" + id, token);
  if (response.status === 200) {
    setAddComment(false);
  } else {
    return notify("Something WWrong happened");
  }
}
