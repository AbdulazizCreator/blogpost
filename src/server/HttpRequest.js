import axios from "axios";
import { toast } from "react-toastify";
import { API_URL, TOKEN } from "../constants";
import { deleteCookie, getCookie } from "../functions/useCookies";

export const HttpRequest = (config = null) => {
  let token = getCookie(TOKEN);
  let headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token ? `Bearer ${token}` : "",
  };
  let instance = axios.create({
    baseURL: `${API_URL}`,
    headers,
    timeout: 100000,
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      let token = getCookie(TOKEN);
      if (error.response) {
        if (error.response.status === 403) {
          if (!token) {
            toast.error("Unauthorization");
          } else {
            deleteCookie(TOKEN);
            toast.error("Refresh");
            window.location.reload();
          }
        }
        console.log(error.response.data);
        error.response.data &&
          toast.error(Object.values(error.response.data).join(" "));
      }
      throw error;
    }
  );
  return instance(config);
};
