import React, { Fragment, useEffect, useState } from "react";
import classes from "./Product.module.css";
import Navbar from "../components/Navbar";
import { add } from "../store/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Product = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [skip, setSkip] = useState(8);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=8");
      const data = await response.json();
      setProduct(data.products);
    };
    setIsLoading(false);
    fetchProduct();
  }, []);

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
    }, 0.1);
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

  const getMoreData = () => {
    setSkip(skip + 8);
    const apiPath = "https://dummyjson.com/products/";
    const limit = 8;
    const queryParam = "?limit=" + limit + "&skip=" + skip;
    const finalUrl = apiPath + queryParam;
    const fetchProduct = async () => {
      const response = await fetch(finalUrl);
      const data = await response.json();
      setProduct([...products, ...data.products]);
    };
    setIsLoading(false);
    fetchProduct();
  };

  console.log(skip);
  console.log(products);

  return (
    <Fragment>
      <Navbar />
      {isLoading && (
        <div className={classes.loader}>
          <LoadingSpinner />
        </div>
      )}
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
      <InfiniteScroll
        dataLength={products.length}
        next={getMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
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
      </InfiniteScroll>
    </Fragment>
  );
};

export default Product;
