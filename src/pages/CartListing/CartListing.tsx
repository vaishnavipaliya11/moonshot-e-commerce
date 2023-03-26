import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./cart.css";
const CartListing = () => {
  const { allCart } = useAppSelector((store) => store.product);

  return (
    <div className="parent-container">
      <Navbar />
      <div className="cart-listing">
        {allCart.map((data) => {
          return <ProductCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export { CartListing };
