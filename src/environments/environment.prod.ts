import { defaultEnvironment } from "./environment.default";

export const environment = {
  ...defaultEnvironment,
  production: true,
  apiUrl: "https://api.ownant.com/api",
};
