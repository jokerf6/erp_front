import { SERVER } from "@/secrets";

export const server = `${SERVER}/api`;
//---------------Auth------------------
export const auth = `${server}/auth`;
export const LOGIN = `${auth}/login`;
//---------------User------------------
export const User = `${server}/user`;
export const AllUsers = `${User}/all`;
export const forget = `${User}/forget_password`;
export const PROFILE = `${User}/profile`;

//---------------Project------------------
export const PROJECTS = `${server}/projects`;
//---------------Tasks------------------
export const TASKS = `${server}/tasks`;
