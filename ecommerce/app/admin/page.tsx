import getProducts from "@/actions/getProducts";
import Summary from "./Summary";
import getOrders from "@/actions/getOrders";
import getUsers from "@/actions/getUsers";
import  Container  from "../components/Container";
import BarGraph from "./manage-products/BarGraph";
import getGraphData from "@/actions/getGraphData";

const Admin = async () => {
  const products = await getProducts({category: null})
  const orders = await getOrders()
  const users = await getUsers()
  const graphData = await getGraphData()

  return (
    <div className="pt-8">
      <Container>
        
      <Summary products={products} orders={orders} users={users}/>
      <div className="mt-4 mx-auto max-w-[1350px]">
        <BarGraph data = {graphData}/>
      </div>
      </Container>
    </div>
  );
};

export default Admin;
