import Cookies from "js-cookie";

export const getCookie = async (cookiename, cookiestring) => {
  const name = `${cookiename} =`;
  const decodedCookie = decodeURIComponent(cookiestring);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const setCookie = (cookiename, cookievalue) => {
  Cookies.set(cookiename, cookievalue, { expires: 365 });
};
