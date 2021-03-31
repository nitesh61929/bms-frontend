import { defaultEnvironment } from "./environment.default";
export const environment = {
  ...defaultEnvironment,
  production: false,
  // apiUrl: "http://qa.api.ownant.com/api",
  apiUrl: "http://192.168.20.170:8080/api",
};
