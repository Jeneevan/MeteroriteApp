import React, {useEffect} from "react";
import classes from "./Search.module.css";

function  SearchBar(props, ref){
  

  
  return (
    <div className={classes.search}>
      <div className={classes.card}>
        <form onSubmit={props.onSearch}>
          <input
            placeholder="Search..."
            className={classes.input}
            type="text"
            ref={ref}
          />
          <button className={classes.button}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default React.forwardRef(SearchBar);
