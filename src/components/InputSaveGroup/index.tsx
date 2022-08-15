import React, {useState, useEffect} from "react"
import classes from "./style.module.css"
import Input from "../core/Input";

export default function InputSaveGroup(props) {
    const {
        className,
        value,
        onSave,
        onChange,
        defaultValue="",
        ...otherProps
    } = props;

    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

    const uncontrolledOnChange = (e) =>  {
        setUncontrolledValue(e.target.value);
    }
    
    return (
        <div className={classes.inputGroup}>
            <Input className={classes.textInput} value={value ? value : uncontrolledValue} onChange={onChange ? onChange : uncontrolledOnChange}/>
            <button className={classes.inputButton} onClick={()=>onSave(value? value : uncontrolledValue)}>Save</button>
        </div>
    )
}
