import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import logo from "/home/kevit/Documents/React Learning/shopping/src/images/logo.png";

const Home = () => {
  const navigate=useNavigate()
  const shopNowHandler=()=>{
    navigate('/login')
  }
  return (
    <Fragment>
      <div className={classes.logo}>
        <img className={classes["logo-img"]} src={logo} alt="logo" />
        <h1>Shopping</h1>
      </div>
      <div className={classes['home-button']}>
      <button className={classes['shop-now-button']} onClick={shopNowHandler}>🛒 SHOP NOW</button>
      </div>
      <div className={classes["carousel-content"]}>
        <Carousel className={classes.carousel}>
          <Carousel.Item interval={2800}>
            <img
              className={classes["carousel-img"]}
              src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Best Prices Ever</h3>
              <p>Shop for Exiting prices at lowest prices ever</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2800}>
            <img
              className={classes["carousel-img"]}
              src="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2800}>
            <img
              className={classes["carousel-img"]}
              src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Get the best Deals Ever</h3>
              <p>Hurry up and SHOP NOw!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Home;
