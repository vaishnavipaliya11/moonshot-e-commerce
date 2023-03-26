import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart } from "../../features/product/Helpers/addToCart";
import { Product } from "../../features/product/ProductSlice";

const ProductCard = ({ data }: { data: Product }) => {
  const { Meta } = Card;
  const dispatch = useAppDispatch();

  const truncateDescription = (description: string) => {
    if (description.length > 30) {
      return `${description.substring(0, 30)}.....`;
    } else {
      return description;
    }
  };
  
  const { allCart } = useAppSelector((store) => store.product);
  const { id, description, price, image, title } = data;
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Link to={`product/${id}`}>
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
        <>
        {allCart.find((data: Product) => Number( data.id) ===  Number(id)) ? (
          <Link to="/cart">
            <Button>
              Go to cart <ShoppingCartOutlined />
            </Button>
          </Link>
        ) : (
          <Button onClick={() => dispatch(addToCart(data))}>
            Add to cart <ShoppingCartOutlined />
          </Button>
        )}
        </>
      ]}
    >
      <Link to={`product/${id}`}>
        <Meta title={title} description={truncateDescription(description)} />
      </Link>
    </Card>
  );
};
export { ProductCard };
