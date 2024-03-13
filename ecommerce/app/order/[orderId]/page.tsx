import { Container} from "@mui/material";
import getOrderById from "@/actions/getOrderByld";
import NullData from "@/app/components/NullData";
import OrderDetails from "./OrderDetails";

interface IPrams {
  orderId?: string;
  ordertId?: string;
}


const Order = async ({ params }: { params: IPrams }) => {
  const order = await getOrderById(params);

  if(!order) return <NullData title="No Order"></NullData>
  return (
    <div className="p-8 ">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
