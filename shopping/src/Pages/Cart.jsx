import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import classes from "./cart.module.css";
import { remove, add } from "../store/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [grandTotal, setGrandTotal] = useState([]);
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
                <img src={product.image} />
                <div className={classes["product-title"]}>
                  <h4>{product.title}</h4>
                  <h6>${product.price}</h6>
                </div>
                <div className={classes["product-quantity"]}>
                  <button onClick={() => onAddHandler(product)}>+</button>
                  <p>{product.quantity}</p>
                  <button onClick={() => onRemoveHandler(product)}>-</button>
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
