import { TASKS } from "@/static/links";
import requestService from "@/static/requests";

export async function GetTaskId(token: string, id: string) {
  const response = await requestService.get(TASKS + "/" + id, token);
  return response.data.data;
}
