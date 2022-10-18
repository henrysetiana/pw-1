import React, {useState, useEffect, useMemo} from "react"
import { cloneDeep, debounce } from "lodash"
import classes from "./style.module.css"

export default function Tile(props:{
    indexX?: number;
    indexY?: number;
    tileSizeX?: number;
    tileSizeY?: number;
    blankTile?: boolean;
}) {
    const {
        indexX = 0,
        indexY = 0,
        tileSizeX = 48,
        tileSizeY = 48,
        blankTile = false
    } = props;

    return (
        <div style={{
            width: tileSizeX+"px",
            height: tileSizeY+"px",
            backgroundImage: blankTile ? "" : "url('/map/tile.jpg')",
            backgroundPositionX: indexX*tileSizeX+"px",
            backgroundPositionY: indexY*tileSizeY+"px",
        }}>
            
        </div>
    )
}



