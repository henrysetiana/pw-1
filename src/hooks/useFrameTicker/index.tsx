import React, {useState, useEffect, useMemo, useContext} from "react"

// export default function useFrameTicker() {
//   // State for keeping track of frame ticks
//   const [frameCounter, setFrameCounter] = useState<number>(0);
  
//   // Add event listeners
//   useEffect(() => {
//     const interval = setInterval(tick, 1000/60);
//     return ()=>clearInterval(interval);
//   }, []); // Empty array ensures that effect is only run on mount and unmount
  
//   const tick = () =>{
//     setFrameCounter(prevFrameCounter => prevFrameCounter+1);
//   }


//   return frameCounter;
// }

export default function useFrameTicker() {
  const [state] = useContext(FrameTickerContext);

  return state;
}

export const FrameTickerContext = React.createContext([]);


export const FrameTickerProvider = ({ children }) => {
  const [frameCounter, setFrameCounter] = useState<number>(0);
  
  // Add event listeners
  useEffect(() => {
    const interval = setInterval(tick, 1000/60);
    return ()=>clearInterval(interval);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  
  const tick = () =>{
    setFrameCounter(prevFrameCounter => prevFrameCounter+1);
  }
  return (
    <FrameTickerContext.Provider value={[ frameCounter, setFrameCounter ]}>
      {children}
    </FrameTickerContext.Provider>
  );
};
