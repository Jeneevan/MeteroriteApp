import React, { useState, useEffect, useRef } from "react";
import classes from "./Table.module.css";
import SearchBar from "./searchBar";
import Pagination from "./Pagination";

function MeteoriteTable() {
  const searchRef = useRef();
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(99);

  const retrieveData = async () => {
    setError(null)
    setLoading(true);
    try {
      const url = "https://data.nasa.gov/resource/gh4g-9sfh.json";
      const response = await fetch(url);

      const data = await response.json();

      
      if (!response.ok){
        throw new Error("Something went wrong!")
      }
      setTableData(data);
      setLoading(false);


    } catch (error) {
      setError(error.message)
      setLoading(false)
    } 
    

  };

  useEffect(() => {
    retrieveData();
  }, []);

  function handlePagination(event) {
    const id = event.target.id;
    setStart(id * 100);
    setEnd(id * 100 + 100);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchRef.current.value);
    if (searchTerm !== "") {
      setStart(0);
      setEnd(1000);
    } else {
      setStart(0);
      setEnd(100);
    }
  }

  var filteredData = tableData.filter((item) => {
  
    if (searchTerm.trim().length === 0) {
      return item;
    } else if (
      Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <div>
      <SearchBar ref={searchRef} onSearch={handleSubmit} />
      {searchTerm == "" && <Pagination onClicked={handlePagination} />}
      <div className={classes.tableDiv}>
        {!loading ? (
          <table className={classes.table} cellSpacing={0}>
            <thead>
              <tr className={classes.headerRow}>
                <th className={classes.cell}>Name</th>
                <th className={classes.cell}>Id</th>
                <th className={classes.cell}>Name Type</th>
                <th className={classes.cell}>Rec Class</th>
                <th className={classes.cell}>Mass (g)</th>
                <th className={classes.cell}>Fall</th>
                <th className={classes.cell}>Year</th>
                <th className={classes.cell}>Latitude</th>
                <th className={classes.cell}>Longitude</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(start, end).map((item) => {
                return (
                  <tr key={item.id}>
                    <td className={classes.cell}>{item.name}</td>
                    <td className={classes.cell}>{item.id}</td>
                    <td className={classes.cell}>{item.nametype}</td>
                    <td className={classes.cell}>{item.recclass}</td>
                    <td className={classes.cell}>{item.mass}</td>
                    <td className={classes.cell}>{item.fall}</td>
                    <td className={classes.cell}>{item.year }</td>
                    <td className={classes.cell}>{item.reclat}</td>
                    <td className={classes.cell}>{item.reclong}</td>
                  </tr>
                );
              })}
              {!loading &&  error && <tr ><td align="center" colSpan="100%" className={classes.ptag}>{error}</td></tr>}
              {filteredData.length === 0 && !error && <tr ><td align="center" colSpan="100%" className={classes.ptag}>No such Data</td></tr>}
            </tbody>
          </table>
        ) : (
          <div className="lds-dual-ring"></div>
        )}
       
      </div>
    </div>
  );
}

export default MeteoriteTable;
