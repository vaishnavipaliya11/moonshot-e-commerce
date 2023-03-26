import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/product/Helpers/addToCart";
import { Cartproduct, DecCartQty, IncCartQty, Product } from "../../features/product/ProductSlice";

const CartCard = ({ data }: { data: Cartproduct }) => {
  const { Meta } = Card;
  const dispatch = useAppDispatch();


  const truncateDescription = (description: string) => {
    if (description.length > 30) {
      return `${description.substring(0, 30)}.....`;
    } else {
      return description;
    }
  };

  const { id, description, price, image, title, qty } = data;
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <Link to={`/product/${id}`}>
            <img
              alt={title}
              src={image}
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
          </Link>
        }
        actions={[
          <div style={{ display: "flex", gap: "0.5rem", justifyContent:"center" }}>
            <Button disabled={qty === 1}
             onClick={()=> dispatch(DecCartQty(id))}>-</Button>
            <span>{qty}</span>
            <Button onClick={()=> dispatch(IncCartQty(id))}>+</Button>,
          </div>,
        ]}
      >
        <Link to={`/product/${id}`}>
          <Meta title={title} description={truncateDescription(description)} />
        </Link>
      </Card>
    </>
  );
};
export { CartCard };
