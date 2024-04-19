import { TASKS } from "@/static/links";
import requestService from "@/static/requests";

export async function AddTaskRequest(
  addTaskForm: any,
  notify: any,
  token: string,
  setAddTaskOverlay: any,
) {
  // **************Handle Request******************
  const formData = new FormData();
  Object.entries(addTaskForm).map((entry: any) => {
    formData.append(entry[0], entry[1])
  })
  // **************Send Request******************
  await request(formData, notify, token, setAddTaskOverlay);
}
async function request(
  requestJson: any,
  notify: any,
  token: string,
  setAddTaskOverlay: any
) {
  const response = await requestService.post(
    TASKS,
    token,
    true,
    requestJson
  );
  if (response.status !== 200) {
    return notify("Something went wrong!");
  } else {
    setAddTaskOverlay(false)
  }
  return response;
}
