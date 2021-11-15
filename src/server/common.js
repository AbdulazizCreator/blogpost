import { HttpRequest } from "./HttpRequest";

export const sendData = (url, data) => {
  const config = {
    method: "POST",
    url,
    data,
  };
  return HttpRequest(config);
};

export const getData = (url) => {
  const config = {
    method: "GET",
    url,
  };
  return HttpRequest(config);
};
