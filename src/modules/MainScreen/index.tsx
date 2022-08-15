import React, {useState, useEffect, useMemo} from "react"
import { cloneDeep, debounce } from "lodash"
import classes from "./style.module.css"
import GameScreen from "../../components/GameScreen"
import Button from "../../components/core/Button"
import Input from "../../components/core/Input"
import InputSaveGroup from "../../components/InputSaveGroup"
import useUserName from "../../hooks/useUserName"

export default function MainMenu() {

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
        console.log("asd");
        if(name!="Dios")
            debouncedPersistDios();
            
        ()=>{
        }
    },[name])
    
    return (
        <GameScreen>
            {
                !nameInputted &&
                <div className={classes.centerContentContainer}>
                    <div className={classes.card+" "+classes.centerMargin}>
                        <h3>What's your name?</h3>
                        <InputSaveGroup
                            onSave={onNameSave}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            defaultValue="Dios"
                        />
                    </div>
                </div>
            }
        </GameScreen>
    )
}



