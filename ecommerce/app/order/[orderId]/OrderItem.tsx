"use client";
import { formatPrice } from "@/untils/formatPrice";
import { CartProductType } from "@prisma/client";
import Image from "next/image";

interface OrderItemProps {
  item: CartProductType;
}
const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div
      className="grid grid-cols-5 text-sx md:text-sm gap-4 
  border-t[1.5px] border-yellow-600 py-4 items-center cursor-pointer border-collapse"
    >
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4 border-yellow-600 border-collapse ">
        <div className="relative w-[70px] aspect-square">
          <Image
            src={item.selectedImg.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
            <div>{(item.name)}</div>
            <div className="font-semibol text-xs">{item.selectedImg.color}</div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">{item.quantity} PCS</div>
      <div className="justify-self-end font-semibold underline">${(item.price * item.quantity)
      .toFixed(2)}</div>
    </div>

  );
};

export default OrderItem;
