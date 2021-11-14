import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { TOKEN } from "../constants";

export const deleteCookie = (name) => {
  Cookie.remove(name);
};

export const setCookie = (name, value) => {
  Cookie.set(name, value, { path: "/" });
};

const tokenExpireTime = (token) => {
  const decoded = jwt_decode(token);
  const tokenExpireTime = decoded.exp;
  console.log(tokenExpireTime);
  const tokenAvailableTime = tokenExpireTime * 1000 - Date.now();
  console.log(tokenAvailableTime);
  return tokenAvailableTime > 0 ? true : false;
};

export const checkCookie = (name) => {
  try {
    const isTokenExpired = tokenExpireTime(name);
    if (!isTokenExpired) {
      deleteCookie(TOKEN);
      toast.success("Refresh");
      window.location.reload();
    }
  } catch (error) {
    deleteCookie(TOKEN);
    return null;
  } finally {
    if (name !== null && tokenExpireTime(name)) {
      return true;
    } else {
      return null;
    }
  }
};

export const getCookie = (name) => {
  const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
};
