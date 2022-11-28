import React, {useState, useEffect, useMemo} from "react"
import { cloneDeep, debounce } from "lodash"
import classes from "./style.module.css"
import useUserName from "../../../../hooks/useUserName"
import Tile from "./Tile"
import Character from "../Character"
import useKeyPress from "../../../../hooks/useKeyPress"

export default function GameMap(props) {
    const moveRight = useKeyPress("d");
    const moveLeft = useKeyPress("a");
    
    return (
        <div>
            <div className={classes.tileGrid}>

                <div className={classes.tileRow}>

                </div>

                <div className={classes.tileRow}>

                </div>

                <div className={classes.tileRow}>

                </div>

                <div className={classes.tileRow}>

                </div>

                <div className={classes.tileRow}>
                    <Tile
                        indexX={0}
                        indexY={0}    
                    />
                    <Tile
                        indexX={1}
                        indexY={0}    
                    />
                    <Tile
                        blankTile   
                    />
                    <Tile
                        indexX={1}
                        indexY={0}    
                    />
                    <Tile
                        indexX={0}
                        indexY={0}    
                    />
                    <Tile
                        indexX={0}
                        indexY={0}    
                    />
                    <Tile
                        indexX={0}
                        indexY={0}    
                    />
                    <Tile
                        indexX={0}
                        indexY={0}    
                    />
                </div>
            </div>
            <div className={classes.characterContainer}>
                <Character
                    animate={moveRight || moveLeft}
                    animationSetIndex={moveRight ? 1 : (moveLeft ? 2 : 0) }
                />
            </div>
        </div>
    )
}



