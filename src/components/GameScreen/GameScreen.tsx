import React from "react"
import classes from "./style.module.css"
import { GameScreenProps } from "./types";

export default function GameScreen(props:GameScreenProps) {
    const {background="#efefef"} = props;
    return (
        <div className={classes.gameScreen} style={{background:background}}>
            {props.children}
        </div>
    )
}