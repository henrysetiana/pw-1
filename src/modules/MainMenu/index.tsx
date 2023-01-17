import React, {useState, useEffect} from "react"
import { useRouter } from "next/router"
import classes from "./style.module.css"
import GameScreen, {GameScreenProps} from "../../components/GameScreen"
import Button from "../../components/core/Button"

export default function MainMenu() {
    const router = useRouter();

    const onButtonClick = () => {
        router.push("/mainScreen")
    }

    const onLeaderboardClick = () => {
        router.push("/leaderboard")
    }
    return (
        <GameScreen background="red">
            <div className={classes.centerContentContainer}>
                <Button onClick={onButtonClick} style={{margin:"auto"}}>Start Game</Button>
                <Button onClick={onLeaderboardClick} style={{margin:"auto"}}>Leaderboard</Button>
            </div>
        </GameScreen>
    )
}