import { PROFILE, TASKS } from "@/static/links";
import requestService from "@/static/requests";

export async function GetProfile(token: string, updateUser: any) {
  const response = await requestService.get(PROFILE, token);
  const data = response.data.data;
  updateUser({
    id: data?.id || "",
    name: data?.name || "",
    idImage: data?.idImage || "",
  });
}
