import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { getAllProducts } from "../../features/product/Helpers/getAllProduct";
import "./ProductListing.css";
const ProductListing = () => {
  const dispatch = useAppDispatch();
  const { allproducts, searchStr } = useAppSelector((store) => store.product);

  const filterProd = allproducts.filter((data) =>
    data.title.toLocaleLowerCase().includes(searchStr)
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="parent-container">
      <Navbar />
      <div className="product-listing">
        {filterProd.map((data) => {
          return <ProductCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export { ProductListing };
