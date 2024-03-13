"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/products/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/untils/formatPrice";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";

interface CartClientProps{
  currentUser: SafeUser | null
}

const CartClient: React.FC<CartClientProps>= ({currentUser}) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const subtotal = cartTotalAmount;
  const taxRate = 0.07; // TAX 7%
  const taxAmount = subtotal * taxRate;
  const shippingRate = 0.01; // 1%
  const shippingAmount = subtotal * shippingRate;
  const promotionDiscount = 0.1; // 10% discount for promotion
  let totalAmount = subtotal + taxAmount + shippingRate - promotionDiscount;
  const promotionDiscountAmount = totalAmount * promotionDiscount;
  totalAmount -= promotionDiscountAmount;

  const router = useRouter()

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your Cart is empty </div>
        <div>
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1 mt-2
          "
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 mt-8 items-center">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item , index) => {
            return <ItemContent key={index} item={item} />;
          })}
      </div>
      <div className="boeder-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[100px]">
          <Button label="Clear Cart" onClick={() => { handleClearCart() }} small outline />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between text-base w-full font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>

          <div className="flex justify-between text-base w-full font-semibold">
            <span>Promotion</span>
            <span>{formatPrice(promotionDiscountAmount)}</span>
          </div>

          <div className="flex justify-between text-base w-full font-semibold">
            <span>ShippingRate +1%</span>
            <span>{formatPrice(shippingAmount)}</span>
          </div>

          <div className="flex justify-between text-base w-full font-semibold">
            <span>VAT +7%</span>
            <span>{formatPrice(taxAmount)}</span>
          </div>
          <p className="text-slate-500">
            Texes and shipping calculate at checkout
          </p>
          <div className="flex justify-between text-base w-full font-semibold">
            <span>Total Amount</span>
            <span>{formatPrice(totalAmount)}</span>
          </div>
          
          <Button  label={currentUser ? 'Checkout' : 'Login To Checkout'} 
          outline ={currentUser ? false : true }
          onClick={() => { currentUser ? router.push('/checkout') : router.push('/login') }}
           />
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1 mt-2
          "
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
