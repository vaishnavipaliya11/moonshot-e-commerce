import { Button } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleProduct } from "../../features/product/Helpers/getSingleProduct";
import "./SingleProduct.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Navbar } from "../../components/Navbar/Navbar";
import { addToCart } from "../../features/product/Helpers/addToCart";
import { Product } from "../../features/product/ProductSlice";
export const SingleProduct = () => {
  const { id } = useParams();
  const { singleProduct } = useAppSelector((store) => store.product);

  const { description, image, price, title } = singleProduct;
  const dispatch = useAppDispatch();
  const { allCart } = useAppSelector((store) => store.product);
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
              <span>{price}</span>
            </div>
            <div>
              <p>{description}</p>
            </div>

            {allCart.find((data: Product) => Number( data.id) ===  Number(id)) ? (
              <Link to="/cart">
                <Button>
                  Go to cart <ShoppingCartOutlined />
                </Button>
              </Link>
            ) : (
              <Button onClick={() => dispatch(addToCart(singleProduct))}>
                Add to cart <ShoppingCartOutlined />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
