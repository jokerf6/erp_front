import { PROJECTS } from "@/static/links";
import requestService from "@/static/requests";

export async function GetProjects(token: string, setOptions: any) {
  const response = await requestService.get(PROJECTS, token);
  const options = [];
  for (let i = 0; i < response.data.data.length; i += 1) {
    options.push({
      label: response.data.data[i].name,
      value: response.data.data[i].id,
    });
  }
  setOptions(options);
  return response.data.data;
}
