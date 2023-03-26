import { Button } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleProduct } from "../../features/product/Helpers/getSingleProduct";
import "./SingleProduct.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Navbar } from "../../components/Navbar/Navbar";
export const SingleProduct = () => {
  const { id } = useParams();
  const { singleProduct } = useAppSelector((store) => store.product);

  const {
    
    description,
    image,
    price,
    title,
   
  } = singleProduct;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="single-container">
          <img
            src={image}
            height={300}
            width={300}
            style={{ objectFit: "contain" }}
          />
          <div>
            <div>
              <h1>{title}</h1>
              <span>
                {price}
              </span>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <Button>
              Add to cart <ShoppingCartOutlined />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
