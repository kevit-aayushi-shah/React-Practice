import React, { Fragment, useState, useEffect } from "react";
import NameList from "./NameList";
import classes from "./styles.module.css"

const Input = (props) => {
  const users = props.name;
  const [filteredUsers, setFilteredUsers] = useState(props.name);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.name.includes(searchTerm)));
  }, [searchTerm, users]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes['whole-content']}>
          <input type="search" onChange={searchChangeHandler} />
        <NameList name={filteredUsers} />
      </div>
    </Fragment>
  );
};

export default Input;
