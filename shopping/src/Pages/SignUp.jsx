import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const createNewAccountHandler = () => {
    navigate("/product", { replace: true });
  };

  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Name</label>
          <input type="email" id="name" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Phone Number</label>
          <input type="number" id="phone" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Address</label>
          <input id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
          <br />
          <br />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={createNewAccountHandler}>
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
