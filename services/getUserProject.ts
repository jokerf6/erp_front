import { AllUsers, TASKS, User } from "@/static/links";
import requestService from "@/static/requests";

export async function GetUsersProject(
  token: string,
  setOptions: any,
  id: string,
  assignments: any,
  setSelected: any
) {
  const response = await requestService.get(
    AllUsers + "?projectId=" + id,
    token
  );
  const options = [];
  for (let i = 0; i < response.data.data.length; i += 1) {
    const exist = assignments.some(
      (item: any) => item["user"]["id"] === response.data.data[i].id
    );
    options.push({
      label: response.data.data[i].name,
      value: {
        id: response.data.data[i].id,
        name: response.data.data[i].name,
        image: response.data.data[i].image,
        included: exist,
      },
    });
  }
  const users = [];
  for (let i = 0; i < assignments.length; i += 1) {
    users.push({
      label: assignments[i]["user"].name,
      value: {
        id: assignments[i]["user"].id,
        name: assignments[i]["user"].name,
        image: assignments[i]["user"].image,
        included: true,
      },
    });
  }
  setSelected(users);
  options.sort((a, b) => {
    // If 'included' is true, prioritize it by returning -1
    if (b.label.included && !a.label.included) {
      return 1;
    }
    // If 'included' is false, deprioritize it by returning 1
    if (a.label.included && !b.label.included) {
      return -1;
    }
    // Otherwise, maintain the original order
    return 0;
  });
  setOptions(options);
  return response.data.data;
}
