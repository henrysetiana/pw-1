import { PATH_URL } from "../url";
import { IGetLeaderboardRequest, IGetLeaderboardResponseData } from "./IUserModel";

export default function mockUser(mock: any) {
  mockLeaderboard(mock);
}

function mockLeaderboard(mock: any) {
  mock
    .onPost(PATH_URL.GET_LEADERBOARD)
    .reply(({ data }: { data: IGetLeaderboardRequest } ):[number,IGetLeaderboardResponseData] => {
      return [
        200,
        {
          topList: [
            {
              rank: 1,
              score: 10000,
              username: "Other Dios"
            },
            {
              rank: 2,
              score: 9000,
              username: "Fake Dios"
            },
            {
              rank: 3,
              score: 8000,
              username: "Impostor Dios"
            },
          ],
          self: {
            rank: 1000,
            score: -10000,
            username: "Dios"
          }
        },
      ];
    });
}
