import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import Button from "../UI/Button";

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const createNewAccountHandler = (event) => {
    event.preventDefault();
    const { name, phone, address, email, password } = input;
    if (name === "") {
      alert("Name cannot be Empty");
    } else if (phone === "") {
      alert("Phone cannot be Empty");
    } else if (address === "") {
      alert("Address cannot be Empty");
    } else if (email === "" || !email.includes("@")) {
      alert("Enter Proper Email");
    } else if (password === "" || password.length < 8) {
      alert("Enter proper Password length greater than 8 character");
    } else {
      localStorage.setItem("userData", JSON.stringify([...data, input]));
      navigate("/products", { replace: true });
    }
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

  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Name</label>
          <input
            type="email"
            id="name"
            required
            onChange={getDataHandler}
            name="name"
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
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Address</label>
          <input
            id="address"
            required
            onChange={getDataHandler}
            name="address"
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
          />
          <br />
          <br />
        </div>
        <div className={classes.actions}>
          <Button type="submit" onClick={createNewAccountHandler}>
            Create
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
