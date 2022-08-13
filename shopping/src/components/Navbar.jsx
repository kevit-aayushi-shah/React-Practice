import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from './Navbar.module.css'
import logo from "/home/kevit/Documents/React Learning/shopping/src/images/logo.png";
import Button from "../UI/Button";

const Navbar = () => {
  const items=useSelector((state)=>state.cart);
  const navigate=useNavigate();

  const onCartPageDisplay=()=>{
    navigate('/cart')
  }

  const logoutHandler=()=>{
    localStorage.removeItem('userLogin')
    navigate('/')
  }

  const profileHandler=()=>{
    navigate('/profile')
  }
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img className={classes["logo-img"]} src={logo} alt="logo" />
          <h3>Shopping</h3>
        </div>
        <div className={classes["header-buttons"]}>
          <Button className={classes.buttons} onClick={onCartPageDisplay}>🛒 Cart ({items.totalQuantity})</Button>
          <Button className={classes.buttons} onClick={profileHandler}>Profile</Button>
          <Button className={classes.buttons} onClick={logoutHandler}>Logout</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
