import React, {useState, useEffect, useMemo, useRef} from "react"
import useKeyPress from "../../../../hooks/useKeyPress"
import useFrameTicker from "../../../../hooks/useFrameTicker"

export default function GameViewport(props:{
    xScroll: number,
    yScroll: number,
} & React.HTMLAttributes<HTMLDivElement>) {

    const moveRight = useKeyPress("d");
    const moveLeft = useKeyPress("a");
    const [xScroll, setXScroll] = useState(0);
    // const moveRightRef = useRef(moveRight);
    // const moveLeftRef = useRef(moveLeft);
    const frameCounter = useFrameTicker();

    // useEffect(() => {
    //   moveRightRef.current = moveRight;
    //   moveLeftRef.current = moveLeft;
    // },[moveRight,moveLeft])

    // useEffect(()=>{
    //     const interval = setInterval(tickAnimation, 1000/60);
    //     return ()=>clearInterval(interval);
    // }, [])
    
    // const tickAnimation = (elapsed) =>{
      
    //   if(moveRightRef.current)
    //   {
    //       setXScroll(prevXScroll => prevXScroll-1);
    //   }
      
    //   if(moveLeftRef.current)
    //   {
    //       setXScroll(prevXScroll => prevXScroll+1);
    //   }
    // }

    useEffect(()=>{
        if(moveRight)
        {
            setXScroll(prevXScroll => prevXScroll-1);
        }
        
        if(moveLeft)
        {
            setXScroll(prevXScroll => prevXScroll+1);
        }
    },[frameCounter])


    return (
        <div style={{marginLeft: xScroll+"px", marginTop: props.yScroll+"px"}}>
            {
                props.children
            }
        </div>
    )
}



