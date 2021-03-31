import { defaultEnvironment } from "./environment.default";

export const environment = {
  ...defaultEnvironment,
  production: false,
  apiUrl: "http://qa.api.ownant.com/api",
};
