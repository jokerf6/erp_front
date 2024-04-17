import { CALL_NOW_MEETINGS, TASKS } from "@/static/links";
import requestService from "@/static/requests";

export async function CallNow(router: any, token: string, updateId: any) {
  const response = await requestService.get(CALL_NOW_MEETINGS, token);
  if (response.status === 200) {
    router.push("/home/meetings/" + response.data.data.id);
  }
  return response.data.data;
}
