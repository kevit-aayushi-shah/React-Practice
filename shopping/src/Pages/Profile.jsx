import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import Button from "../UI/Button";

const Profile = () => {
  const navigate = useNavigate();
  const userArray = localStorage.getItem("userData");
  const userData = JSON.parse(userArray);
  const [input, setInput] = useState({
    name: userData[0].name,
    phone: userData[0].phone,
    address: userData[0].address,
    email: userData[0].email,
    password: userData[0].password,
  });
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const updateAccountHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify([input]));
    alert("Data Updated SuccessFully");
    navigate("/products");
  };

  const getDataHandler = (event) => {
    const { value, name } = event.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const backHandler = () => {
    navigate("/products");
  };

  return (
    <section className={classes.auth}>
      <h1>Profile</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Name</label>
          <input
            type="email"
            id="name"
            required
            onChange={getDataHandler}
            name="name"
            value={input.name}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Phone Number</label>
          <input
            type="number"
            id="phone"
            required
            onChange={getDataHandler}
            name="phone"
            value={input.phone}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Address</label>
          <input
            id="address"
            required
            onChange={getDataHandler}
            name="address"
            value={input.address}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={getDataHandler}
            name="email"
            value={input.email}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={getDataHandler}
            name="password"
            value={input.password}
          />
          <br />
          <br />
        </div>
        <div className={classes.actions}>
          <Button type="submit" onClick={updateAccountHandler}>
            Update
          </Button>
          <br />
          <Button onClick={backHandler}> Back</Button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
