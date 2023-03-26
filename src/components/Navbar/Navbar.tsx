import { Badge, Input, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./navbar.css";
import { UpdateSearch } from "../../features/product/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { getAllCart } from "../../features/product/Helpers/getAllCart";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { allCart } = useAppSelector((store) => store.product);
  const handelSearch = (e: any) => {
    dispatch(UpdateSearch(e.target.value));
  };
  useEffect(() => {
    dispatch(getAllCart());
  }, []);
  return (
    <div className="navbar-container">
      <Link to="/" style={{textDecoration:"none"}}>
        <h2>Moonshot E-Commerce</h2>
      </Link>

      <div className="navbar-sub" >
        <Input placeholder="search product" onChange={handelSearch} />
        <Space>
          <Link to="/cart">
            <Badge size="small" count={allCart.length}>
              <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
            </Badge>
          </Link>
        </Space>
      </div>
    </div>
  );
};
