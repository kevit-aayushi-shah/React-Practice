import React, { Fragment, useEffect } from "react";
import classes from "./Product.module.css";
import Navbar from "../components/Navbar";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../store/ProductSlice.jsx";
import { useNavigate} from "react-router-dom";

const Product = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onAddHandler = (product) => {
    dispatch(add(product));
  };

 const showDetailHandler=(product) =>{
    const id = product.id;
    navigate(`product/${id}`, {replace: true} ) 
  }

  if (status === STATUSES.LOADING) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  return (
    <Fragment>
      <Navbar />
      <div className={classes["input-area"]}>
        <input
          type="search"
          className={classes["search-input"]}
          placeholder="Search Products here"
        />
      </div>
      <br />
      <div className={classes["product-list"]}>
        {products.map((product, i) => {
          return (
            <div
              className={classes["product-card"]}
              key={i}
              onClick={() => showDetailHandler(product)}
            >
              <img className={classes["product-img"]} src={product.thumbnail} alt='img'/>
              <h5 className={classes["product-title"]}>{product.title}</h5>
              <h5 className={classes["product-price"]}>${product.price}</h5>
              <button
                className={classes["add-to-cart-button"]}
                onClick={() => onAddHandler(product)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Product;
