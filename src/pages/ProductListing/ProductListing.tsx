import { Navbar } from "../../components/Navbar/Navbar";
import "./ProductListing.css";
const ProductListing = () => {
  return (
    <div className="parent-container">
      <Navbar /> 
      <div className="product-listing"></div>
    </div>
  );
};

export { ProductListing };
