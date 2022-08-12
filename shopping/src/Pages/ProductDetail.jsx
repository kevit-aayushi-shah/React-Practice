import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Product-detail.module.css";
import Carousel from "react-bootstrap/Carousel";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.productId;
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setDetail(data);
    };
    setIsLoading(false);
    fetchProduct();
  }, [id]);

  const backHandler = () => {
    navigate("/products");
  };
  return (
    <Fragment>
      {isLoading && <div className={classes.loader}><LoadingSpinner /></div>}
      <div className={classes["carousel-content"]}>
        <div className={classes["carousel-content"]}>
          <Carousel className={classes.carousel}>
            <Carousel.Item interval={2800}>
              <img
                className={classes["carousel-img"]}
                src={detail.thumbnail}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img
                className={classes["carousel-img"]}
                src={detail.thumbnail}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2800}>
              <img
                className={classes["carousel-img"]}
                src={detail.thumbnail}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={classes["detail-content"]}>
          <h1>{detail.title}</h1>
          <p>{detail.description}</p>
          <br />
          <button onClick={backHandler}>Back</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
