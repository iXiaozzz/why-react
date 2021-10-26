const devBaseURL = "https://api.dev.cn";
const proBaseURL = "https://api.pro.cn";

const NODE_ENV = process.env.NODE_ENV?.toLocaleLowerCase();

export const BASE_URL = NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5 * 1000;
