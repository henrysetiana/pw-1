import React, {useState, useEffect} from "react"
import classes from "./style.module.css"

export default function Button(props) {
    const {
        className,
        onClick,
        ...otherProps
    } = props;

    return (
        <a className={classes.button+" "+props.className} onClick={()=>{
            alert('welcome');
            props.onClick();
        }}
        {
            ...otherProps
        }
        >
            {props.children}
        </a>
    )
}
