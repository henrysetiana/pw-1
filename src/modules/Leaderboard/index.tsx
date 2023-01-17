import React, {useState, useEffect} from "react"
import { useRouter } from "next/router"
import classes from "./style.module.css"
import GameScreen, {GameScreenProps} from "../../components/GameScreen"
import Button from "../../components/core/Button"
import { userService } from "../../services/httpServicePool"
import { IGetLeaderboardResponseData, ILeaderboardData } from "../../services/UserService/IUserModel"

export default function MainMenu() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [leaderboardData, setLeaderboardData] = useState<IGetLeaderboardResponseData | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        await userService.getLeaderboard({}).then((res)=>{
            setLeaderboardData(res.data);
        })
        setIsLoading(false);
    }

    return (
        <GameScreen background="white">
            <div className={classes.centerContentContainer}>
                <div className={classes.leaderboardContainer}>
                    {
                        leaderboardData!=null &&
                        <table className={classes.leaderboardTable}>
                            <tbody>
                                {
                                    leaderboardData.topList.map((item)=>{
                                        return <tr className={item.username==leaderboardData.self.username ? classes.selfRow : ""}>
                                            <td>{item.rank}</td>
                                            <td>{item.username}</td>
                                            <td className={classes.right}>{item.score}</td>
                                        </tr>
                                    })
                                }
                                {
                                    !leaderboardData.topList.some((item)=>item.username==leaderboardData.self.username) &&
                                    <>
                                        <tr>
                                            <td>...</td>
                                            <td></td>
                                            <td className={classes.right}></td>
                                        </tr>
                                        <tr className={classes.selfRow}>
                                            <td>{leaderboardData.self.rank}</td>
                                            <td>{leaderboardData.self.username}</td>
                                            <td className={classes.right}>{leaderboardData.self.score}</td>
                                        </tr>
                                    </>
                                }
                            </tbody>
                        </table>
                    }
                    {
                        isLoading && 
                        <div>LOADING DATA...</div>
                    }
                </div>
            </div>
        </GameScreen>
    )
}