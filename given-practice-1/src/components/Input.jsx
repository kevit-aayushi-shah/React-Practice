import React, { Fragment, useState, useEffect } from "react";
import NameList from "./NameList";
import classes from "./styles.module.css";

const Input = (props) => {
  const users = props.name;
  const [filteredUsers, setFilteredUsers] = useState(props.name);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
   {!searching && setFilteredUsers(users.filter((user) => user.name.includes(searchTerm)));}
  }, [searchTerm, users, searching]);

  const searchChangeHandler = (event) => {
    setSearching(true);
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearching(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [searching]);

  return (
    <Fragment>
      <div className={classes["whole-content"]}>
        <input type="search" onChange={searchChangeHandler} />
        {!searching && <NameList name={filteredUsers} />}
        {searching && <p>Loading...</p>}
      </div>
    </Fragment>
  );
};

export default Input;
