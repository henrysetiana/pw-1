import React, {useState, useEffect, useMemo} from "react"
import { cloneDeep, debounce } from "lodash"
import classes from "./style.module.css"
import useUserName from "../../../../hooks/useUserName"
import Tile from "./Tile"

export default function GameMap(props) {
    
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
        </div>
    )
}



