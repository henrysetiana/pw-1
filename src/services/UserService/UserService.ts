import BaseService from "../baseService";
import {
  IGetLeaderboardRequest,
  IGetLeaderboardResponse
} from "./IUserModel";
import { BASE_URL, PATH_URL } from "../url";

const service = new BaseService(`${BASE_URL.PAYMENT}`);

export class UserService {
  _baseService;
  constructor(baseService) {
    this._baseService = baseService;
  }
  getLeaderboard = (spec: IGetLeaderboardRequest): Promise<IGetLeaderboardResponse> => {
    return this._baseService.post(PATH_URL.GET_LEADERBOARD, spec);
  };
}

export default UserService;
