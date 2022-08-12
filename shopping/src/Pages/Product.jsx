import React, { Fragment, useEffect, useState } from "react";
import classes from "./Product.module.css";
import Navbar from "../components/Navbar";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../store/ProductSlice.jsx";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    {
      !searching &&
        setFilteredProducts(
          products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
    }
  }, [searchTerm, products, searching]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearching(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [searching]);

  const onAddHandler = (product) => {
    dispatch(add(product));
  };

  const showDetailHandler = (product) => {
    const id = product.id;
    navigate(`/products/${id}`);
  };

  const searchChangeHandler = (event) => {
    setSearching(true);
    setSearchTerm(event.target.value);
  };

  if (status === STATUSES.LOADING) {
    return (
      <div className={classes.loader}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <div className={classes["input-area"]}>
        <input
          type="search"
          className={classes["search-input"]}
          placeholder="Search Products here"
          onChange={searchChangeHandler}
        />
      </div>
      <br />
      {searching && (
        <div className={classes.loader}>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes["product-list"]}>
        {filteredProducts.map((product, i) => {
          return (
            <div className={classes["product-card"]} key={i}>
              <div onClick={() => showDetailHandler(product)}>
                <img
                  className={classes["product-img"]}
                  src={product.thumbnail}
                  alt="img"
                />
                <h5 className={classes["product-title"]}>{product.title}</h5>
                <h5 className={classes["product-price"]}>${product.price}</h5>
              </div>
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
