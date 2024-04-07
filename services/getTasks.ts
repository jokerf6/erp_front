import { TASKS } from "@/static/links";
import requestService from "@/static/requests";

export async function GetTasks(token: string, setTasks: any) {
  const response = await requestService.get(TASKS, token);
  setTasks(response.data.data);
  console.log(response);
  return response.data.data;
}
