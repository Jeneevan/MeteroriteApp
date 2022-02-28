import React from "react";
import classes from "./Header.module.css";

function Header(){
    return(
        <div className={classes.header}>
            <header>
                <span className={classes.span}>Meteorite Explorer</span>
            </header>
        </div>
    )
}

export default Header;