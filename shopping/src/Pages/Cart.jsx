import React, { Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import classes from "./cart.module.css";
import { remove, add } from "../store/CartSlice";
import Button from "../UI/Button";

const Cart = () => {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const onRemoveHandler = (product) => {
    dispatch(remove(product));
  };

  const onAddHandler = (product) => {
    dispatch(add(product));
  };

  let allPrices = [];
  let sum = 0;
  return (
    <div>
      <Navbar />
      {products.map((product, i) => {
        allPrices.push(product.price * product.quantity);
      })}
      {allPrices.forEach((x) => {
        sum += x;
      })}
      {sum === 0 ? (
        <h1 className={classes["grand-total"]}> Your Cart is empty</h1>
      ) : (
        <h1 className={classes["grand-total"]}>Grand total : $ {sum}</h1>
      )}
      <div className={classes["cart-list"]}>
        {products.map((product, i) => {
          return (
            <Fragment key={i}>
              <div className={classes["cart-product"]}>
                <img src={product.image} alt='img'/>
                <div className={classes["product-title"]}>
                  <h4>{product.title}</h4>
                  <h6>${product.price}</h6>
                </div>
                <div className={classes["product-quantity"]}>
                  <Button onClick={() => onRemoveHandler(product)}>-</Button>
                  <p>{product.quantity}</p>
                  <Button onClick={() => onAddHandler(product)}>+</Button>
                </div>
                <h5 className={classes["net-amount"]}>
                  Net Price: ${product.totalPrice}
                </h5>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
