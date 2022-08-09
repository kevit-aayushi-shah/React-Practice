import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const createNewAccountHandler = () => {
    navigate('/signup', {replace: true})
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
          <br/>
          <br/>
        </div>
        <div className={classes.actions}>
          <button>Login</button><br/>
          <p>Do not have an Account?</p>
          <button type="button" onClick={createNewAccountHandler}>
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
