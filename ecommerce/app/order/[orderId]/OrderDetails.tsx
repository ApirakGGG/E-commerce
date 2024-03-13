"use client";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/untils/formatPrice";
import { order } from "@prisma/client";
import moment from "moment";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

interface OrderDetailsProps {
  order: order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      price: "",
    },
  });

  console.log("Order amount:", order.amount);
  return (
    <div className="max-w-[1150] m-auto flex flex-col gap-2  border-slate-600 border-spacing-5">
      <div className="mt-8">
        <Heading title="Order Details" />
      </div>
      <div>
        Order ID:
        <span className="ml-3">{order.id}</span>
      </div>

      <div>
        Total Amount:
        <span className="ml-3">{formatPrice(order.amount)}</span>
      </div>

      <div>
        Currency:
        <span className="ml-3">{order.currency}</span>{" "}
      </div>

      <div>
      PaymentIntentId:
        <span className="ml-3">{order.paymentIntentId}</span>{" "}
      </div>

      <div className="flex gap-2 items-center  ">
        <div>Payment Status :</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
            <Status
              text="Completed"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center  ">
        <div>Delivery Status :</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : (
            <Status
              text="Deliveried"
              icon={MdDone}
              bg="bg-yellow-200"
              color="text-yellow-700"
            />
          )}
        </div>
      </div>

      <div className="">
        Date: <span className="ml-3">{moment(order.createDate).fromNow()}</span>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-4 mb-2 underline"> Orders</h2>
        <div className="grid grid-cols-5 gap-4  pb-2 items-center font-bold ">
          <div className="col-span-2 justify-self-start">Product</div>
          <div className=" justify-self-center">Price</div>
          <div className=" justify-self-center">QTY</div>
          <div className=" justify-self-end">TOTAL</div>
        </div>
        {order.products &&
          order.products.map((item) => {
            return <OrderItem key={item.id} item={item}></OrderItem>;
          })}
        <div className="font-semibold   border-slate-500">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
