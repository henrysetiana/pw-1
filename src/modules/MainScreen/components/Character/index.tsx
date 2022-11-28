import { useEffect, useState } from "react";
import useFrameTicker from "../../../../hooks/useFrameTicker";

export default function Character(props:{
    animate?: boolean;
    animationSetIndex?: number;
}) {
    const {animate=false, animationSetIndex=0} = props;
    const frameCounter = useFrameTicker();
    const [animationFrame, setAnimationFrame] = useState(0);
    const animationFrameCount = 4;

    useEffect(()=>{
        if(frameCounter%15==0) {
          setAnimationFrame(prevAnimationFrame => (prevAnimationFrame+1)%animationFrameCount)
        }
    },[frameCounter])

    return (
        <div>
          <Sprite
            indexX={animate ? animationFrame: 0}
            indexY={animationSetIndex}
            tileSizeX={64}
            tileSizeY={96}
          />
        </div>
    )
}

export function Sprite(props:{
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
            backgroundImage: "url('/character/character_sprite.png')",
            backgroundPositionX: indexX*tileSizeX+"px",
            backgroundPositionY: indexY*tileSizeY+"px",
        }}>
            
        </div>
    )
}



