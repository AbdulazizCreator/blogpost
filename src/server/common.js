import { HttpRequest } from "./HttpRequest";

export const sendData = (url, data) => {
  const config = {
    method: "POST",
    url,
    data,
  };
  return HttpRequest(config);
};
