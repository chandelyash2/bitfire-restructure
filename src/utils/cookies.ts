import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setCookies = (name: string, value: string) => {
    return cookies.set(name, value);
};
export const getCookies = (name: string) => {
    return cookies.get(name);
};
export const deleteCookie = (name: string) => {
    return cookies.remove(name);
};
