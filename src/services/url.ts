export const env = process.env.NEXT_PUBLIC_ENV;
const API_URL = {
  DEV: {
    PAYMENT: "https://api.test.online",
  },
  STG: {
    PAYMENT: "https://api.test.net",
  },
  PROD: {
    PAYMENT: "https://api.test.com",
  },
};

export const API_PATH_URL = {
  GET_LEADERBOARD: "user/get-leaderboard",
};

export const BASE_URL = ((): {
  PAYMENT: string;
} => {
  let URL;

  if (env === "prod") URL = API_URL.PROD;
  else if (env === "stg") URL = API_URL.STG;
  else URL = API_URL.DEV;

  return URL;
})();

export const PATH_URL = API_PATH_URL;
