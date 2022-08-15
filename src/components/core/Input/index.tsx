import React, {useState, useEffect} from "react"
import classes from "./style.module.css"

export default function Input(props) {
    const {
        className,
        ...otherProps
    } = props;
    
    return (
        <input className={classes.input+" "+className} {...otherProps}/>
    )
}
