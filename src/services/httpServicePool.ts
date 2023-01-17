import HttpClient from "./httpClient";
import BaseService from "./baseService";
import { BASE_URL } from "./url";

import UserService from "./UserService/UserService";

const httpClient = new HttpClient(BASE_URL.PAYMENT);
const baseService = new BaseService(httpClient);

export const userService = new UserService(baseService);
