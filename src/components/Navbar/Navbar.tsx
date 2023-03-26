import { Badge, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2>navbar</h2>

      <Space>
        <Badge size="small" count={5}>
          <ShoppingCartOutlined style={{fontSize:"2rem"}}/>
        </Badge>
      </Space>
    </div>
  );
};
