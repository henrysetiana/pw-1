import { IBaseResponse, Pagination } from "../BaseModel";

export interface IRole {
  id: number;
  name: string;
  source: "INTERNAL" | "SALES_API";
}

export interface IGetLeaderboardRequest {
  
}

export interface ILeaderboardData {
  rank: number;
  username: string;
  score: number;
}

export interface IGetLeaderboardResponseData {
  topList: Array<ILeaderboardData>;
  self: ILeaderboardData;
}

export interface IGetLeaderboardResponse extends IBaseResponse {
  data: IGetLeaderboardResponseData
}