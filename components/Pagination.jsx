import React from "react";
import classes from './Pagination.module.css';



function Pagination(props){ 
    return (
    <div className={classes.buttonDiv}>
            <button className={classes.button} onClick={props.onClicked} id={0}>1</button>
            <button className={classes.button} onClick={props.onClicked} id={1}>2</button>
            <button className={classes.button} onClick={props.onClicked} id={2}>3</button>
            <button className={classes.button} onClick={props.onClicked} id={3}>4</button>
            <button className={classes.button} onClick={props.onClicked} id={4}>5</button>
            <button className={classes.button} onClick={props.onClicked} id={5}>6</button>
            <button className={classes.button} onClick={props.onClicked} id={6}>7</button>
            <button className={classes.button} onClick={props.onClicked} id={7}>8</button>
            <button className={classes.button} onClick={props.onClicked} id={8}>9</button>
            <button className={classes.button} onClick={props.onClicked} id={9}>10</button>
    </div>
    )
}

export default Pagination