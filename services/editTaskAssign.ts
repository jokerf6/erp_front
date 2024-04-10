import { valid } from "@/functions/validations";
import { LOGIN, TASKS } from "@/static/links";
import requestService from "@/static/requests";
import { setCookie } from "cookies-next";

export async function EditTaskAssignRequest(
  selected: any,
  notify: any,
  taskId: string,
  token: string,
  setAddTeammates: any
) {
  if (selected.length === 0) {
    console.log("ss");
    await notify("Please select at least one user to add to this task");
    return;
  }
  // **************Handel Request******************
  const data = [];
  for (let i = 0; i < selected.length; i += 1) {
    data.push(selected[i].value.id);
  }
  const requestJson = JSON.stringify({
    userId: data,
  });
  // **************Send Request******************
  await request(requestJson, notify, taskId, token, setAddTeammates);
}
async function request(
  requestJson: any,
  notify: any,
  id: string,
  token: string,
  setAddTeammates: any
) {
  const response = await requestService.patch(
    TASKS + "/" + id + "/assignees",
    token,
    false,
    requestJson
  );
  if (response.status === 200) {
    setAddTeammates(false);
  } else {
    return notify("Something went wrong!");
  }

  return response;
}
