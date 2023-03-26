import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";

const ProductCard = () => {
  const { Meta } = Card;
  const handel = () => {};
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Button onClick={handel}>
          Add to cart
          <ShoppingCartOutlined />
        </Button>,
      ]}
    >
      <Meta title="Card title" description="This is the description" />
    </Card>
  );
};
export { ProductCard };
