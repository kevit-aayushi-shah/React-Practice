import React, { Fragment, useState, useEffect } from "react";
import NameList from "./NameList";
import classes from "./styles.module.css";
import SearchIcon from '@mui/icons-material/Search';
const Content = (props) => {
  const users = props.name;
  console.log(users)
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    {
      !searching &&
        setFilteredUsers(
          users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
    }
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
        <div className={classes["input-area"]}>
          <SearchIcon/>
          <input
            type="search"
            onChange={searchChangeHandler}
          />
        </div>
        {!searching && <NameList name={filteredUsers} />}
        {searching && <p>Loading...</p>}
      </div>
    </Fragment>
  );
};

export default Content;
