import React from "react";
import classes from './Pagination.module.css';



function Pagination(props){ 
    return (
    <div className={classes.buttonDiv}>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={0}>1</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={1}>2</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={2}>3</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={3}>4</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={4}>5</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={5}>6</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={6}>7</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={7}>8</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={8}>9</button></div>
            <div className={classes.divButton}><button className={classes.button} onClick={props.onClicked} id={9}>10</button></div>
    </div>
    )
}

export default Pagination