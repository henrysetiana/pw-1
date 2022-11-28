import React, {useState, useEffect, useMemo} from "react"
import { cloneDeep, debounce } from "lodash"
import classes from "./style.module.css"
import GameScreen from "../../components/GameScreen"
import Button from "../../components/core/Button"
import Input from "../../components/core/Input"
import InputSaveGroup from "../../components/InputSaveGroup"
import useUserName from "../../hooks/useUserName"
import GameViewport from "./components/GameViewport"
import GameMap from "./components/GameMap"

export default function MainScreen() {

    // const [name, setName] = useState("Dios");
    const [name, setName] = useUserName();
    const [nameInputted, setNameInputted] = useState(false);

    const onNameSave = (value) => {
        if(name!="Dios")
        {
            alert('You can only be Dios!');
            return;
        }
        setName(value);

        if(confirm("So your name is "+value+"?"))
        {
            setNameInputted(true);
        }
        else {

        }
    }

    const debouncedPersistDios = React.useRef(
        debounce(async () => {
            setName("Dios");
        }, 500)
    ).current;
    
    useEffect(()=>{
        if(name!="Dios")
            debouncedPersistDios();
            
        ()=>{
        }
    },[name, debouncedPersistDios])
    
    return (
        <GameScreen background="white" >
            {
                !nameInputted &&
                <div className={classes.centerContentContainer}>
                    <div className={classes.card+" "+classes.centerMargin}>
                        <h3>What&apos;s your name?</h3>
                        <InputSaveGroup
                            onSave={onNameSave}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            defaultValue="Dios"
                        />
                    </div>
                </div>
            }
            {
                nameInputted &&


                <GameViewport
                    xScroll={0}
                    yScroll={0}
                >
                    <GameMap/>
                </GameViewport>
            }
        </GameScreen>
    )
}



