import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from './Navbar.module.css'
import logo from "/home/kevit/Documents/React Learning/shopping/src/images/logo.png";

const Navbar = () => {
  const items=useSelector((state)=>state.cart);
  const navigate=useNavigate();

  const onCartPageDisplay=()=>{
    navigate('/cart')
  }
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img className={classes["logo-img"]} src={logo} alt="logo" />
          <h3>Shopping</h3>
        </div>
        <div className={classes["header-buttons"]}>
          <button className={classes.buttons} onClick={onCartPageDisplay}>🛒 Cart ({items.totalQuantity})</button>
          <button className={classes.buttons}>Profile</button>
          <button className={classes.buttons}>Logout</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
