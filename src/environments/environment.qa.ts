import { defaultEnvironment } from "./environment.default";

export const environment = {
  ...defaultEnvironment,
  production: true,
  apiUrl: "http://qa.api.ownant.com/api",
};
