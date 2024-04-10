import { TASKS } from "@/static/links";
import requestService from "@/static/requests";

export async function GetTasks(
  token: string,
  setTasks: any,
  id: string | null
) {
  const response =
    id !== null
      ? await requestService.get(TASKS + "?projectId=" + id, token)
      : await requestService.get(TASKS, token);
  setTasks(response.data.data);
  return response.data.data;
}
