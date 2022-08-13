import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useState } from "react";
import Button from "../UI/Button";

const Login = () => {
  const navigate = useNavigate();
  const createNewAccountHandler = () => {
    navigate("/signup", { replace: true });
  };

  const [input, setInput] = useState({ email: "", password: "" });
  const validation = (event) => {
    event.preventDefault();
    const userArray = localStorage.getItem("userData");
    const { email, password } = input;
    if (email === "" || !email.includes("@")) {
      alert("Enter Proper Email");
    } else if (password === "" || password.length < 8) {
      alert("Enter proper Password length greater than 8 character");
    } else {
      if (userArray && userArray.length) {
        const userData = JSON.parse(userArray);
        console.log(userData)
        const userLogin = userData.filter((element, i) => {
          return element.email === email && element.password === password;
        });

        if (userLogin.length === 0) {
          alert("Invalid Details");
        } else {
          localStorage.setItem('userLogin',JSON.stringify(userArray))
          navigate("/products");
        }
      }
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
      <h1>Login</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required name="email" onChange={getDataHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required name="password" onChange={getDataHandler}/>
          <br />
          <br />
        </div>
        <div className={classes.actions}>
          <Button type="submit" onClick={validation}>
            Login
          </Button>
          <br />
          <p>Do not have an Account?</p>
          <Button type="button" onClick={createNewAccountHandler}>
            Create new account
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
